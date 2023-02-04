<template>
    <div class="board">
        <div class="grid-lives">
            <div class="lives">
                <img src="../assets/img/cards/heart.svg" alt="life" v-for="i in lives" :key="i">
            </div>

            <div class="sudoku">
                <table v-if="sudoku.length > 0" class="sudoku-grid">
                    <tr v-for="row, i in sudoku" :key="i">
                        <td v-for="cell, j in row" :key="j" :style="caseStyle(i, j)" @click="selectCell(cell)">
                            <div v-if="cell.value"
                                :class="{ selected: cell === selectedCell, 'mini-numbers': miniNumbersMode }">
                                <span :class="{ invalidNumber: cell.value !== sudokuSolution[cell.row][cell.column] }">
                                    {{ cell.value }}
                                </span>
                            </div>
                            <table v-else :class="{ selected: cell === selectedCell, 'mini-numbers': miniNumbersMode }">
                                <tr v-for="i in 3" :key="i">
                                    <td v-for="j in 3" :key="j">
                                        {{ cell.miniNumbers[(i - 1) * 3 + j] ? (i - 1) * 3 + j : "" }}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <div v-if="lost" class="lost-overlay">
                    <div>You Lost</div>
                    <button class="btn" @click="startSudoku">Retry</button>
                </div>
            </div>
        </div>

        <div class="interface">
            <div class="btn-grid">
                <button v-for="i in 9" :key="i" class="btn" @click="addNumber(i)">
                    {{ i }}
                </button>
            </div>
            <button class="btn" @click="toggleMiniNumber">Notes {{ miniNumbersMode? "ON": "OFF" }}</button>
            <button class="btn" @click="deleteNumber" style="margin-bottom: 5px">Delete</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core"
import sudokuGenerator from "sudoku"
import { nextTick } from 'vue'

let sudoku = $ref([])
let sudokuSolution = $ref([])

let lives = $ref(3)
let lost = $ref(false)

function startSudoku() {
    let sudokuGenerated = sudokuGenerator.makepuzzle()
    let sudokuGeneratedIndex = 0
    let sudokuGeneratedSolution = sudokuGenerator.solvepuzzle(sudokuGenerated)

    lost = false
    lives = 3

    sudoku = []
    sudokuSolution = []

    for (let row = 0; row < 9; row++) {
        sudoku.push([])
        sudokuSolution.push([])
        for (let column = 0; column < 9; column++) {
            if (sudokuGenerated[sudokuGeneratedIndex] !== null) {
                sudoku[row].push({
                    value: sudokuGenerated[sudokuGeneratedIndex] + 1,
                    lock: true,
                    miniNumbers: {},
                    row: row,
                    column: column
                })

            } else {
                sudoku[row].push({
                    value: null,
                    lock: false,
                    miniNumbers: {},
                    row: row,
                    column: column
                })
            }
            sudokuSolution[row].push(sudokuGeneratedSolution[sudokuGeneratedIndex] + 1)
            sudokuGeneratedIndex += 1

        }
    }
}

startSudoku()

function caseStyle(row, column) {
    return {
        borderLeftWidth: column % 3 === 0 ? '5px' : '1px',
        borderRightWidth: column === 8 ? '5px' : '1px',
        borderTopWidth: row % 3 === 0 ? '5px' : '1px',
        borderBottomWidth: row === 8 ? '5px' : '1px'
    }
}

let selectedCell = $ref(null)

let miniNumbersMode = $ref(false)

function toggleMiniNumber() {
    miniNumbersMode = !miniNumbersMode
}

async function addNumber(number) {
    if (!selectedCell)
        return

    if (miniNumbersMode) {
        if (!selectedCell.miniNumbers[number]) {
            selectedCell.miniNumbers[number] = true
            selectedCell.value = null
        } else {
            selectedCell.miniNumbers[number] = false
        }
    } else {
        selectedCell.value = null
        await nextTick()
        selectedCell.value = number
        if (selectedCell.value !== sudokuSolution[selectedCell.row][selectedCell.column]) {
            if (lives !== 0)
                lives--
            else
                lost = true
        }
    }
}

function deleteNumber() {
    if (!selectedCell)
        return
    if (miniNumbersMode)
        selectedCell.miniNumbers = {}
    else
        selectedCell.value = null
}


onMounted(() => {
    window.addEventListener('keydown', e => {
        if (e.key === "Backspace") {
            deleteNumber()
            return
        }

        if (![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+e.key)) {
            return
        }

        addNumber(+e.key)
    })
})

function selectCell(cell) {
    if (cell.lock)
        return
    selectedCell = cell
}



</script>

<style lang="scss" scoped>
.board {
    display: flex;
    margin: auto;
    margin-top: 30px;
    justify-content: space-between;
    max-width: 52%;
    align-items: center;
}

.grid-lives {
    color: black;
    .lives {
        display: flex;
        justify-content: center;
        height: 50px;
        padding: 5px;

        img {
            display: inline-block;
            margin: 0 10px;
            height: 100%;
        }
    }
}

.interface {
    background: rgb(255, 255, 255);
    border-radius: 10px;
    min-width: 200px;
    padding: 10px 15px;
    display: inline-block;
    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;

    >.btn {
        width: 100%;
        display: block;
        margin-bottom: 15px;
    }

    .btn-grid {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 10px;

        .btn {
            margin: 0;
        }
    }
}

.sudoku {
    position: relative;
}

.lost-overlay {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 3rem;
    color: white;

    .btn {
        font-size: 2rem;
    }
}

.sudoku-grid {
    border-collapse: collapse;
    width: 40vw;
    height: 40vw;
    margin: auto;
    user-select: none;
    background: white;
    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;

    >tr {
        height: calc(100% / 9);

        >td {
            font-size: 3rem;
            width: calc(100% / 9);
            border: 1px solid black;

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                width: 100%;
                height: 100%;
            }

            table {
                width: 100%;
                height: 100%;

                td {
                    font-size: 1rem;
                    text-align: center;
                    width: calc(100% / 9);
                    height: calc(100% / 9);
                }
            }
        }

    }


}

.selected {
    border: 2px solid red;

    &.mini-numbers {
        border: 2px solid green;
    }

}

.invalidNumber {
    color: red;
    animation: headshake 100ms cubic-bezier(.4, .1, .6, .9) 2;
}

@keyframes headshake {
    25% {
        transform: translateX(10%);
    }

    75% {
        transform: translateX(10% * -1);
    }
}
</style>