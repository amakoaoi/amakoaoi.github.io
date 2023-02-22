<template>
    <div @mousemove="drag" @pointerup="dragStop" style="position: fixed; top: 0; bottom: 0; left: 0; right: 0;">
        <section v-if="win" class="win">
            You won !
            <button class="btn" @click="startSolitaire">
                <sl-icon name="arrow-clockwise"></sl-icon> Restart
            </button>
        </section>
        <section class="actions">
            <button class="btn" @click="undo">
                <sl-icon name="arrow-bar-left"></sl-icon> Undo
            </button>
            <button class="btn" @click="startSolitaire">
                <sl-icon name="arrow-clockwise"></sl-icon> Restart
            </button>
        </section>
        <section class="board">
            <div class="first-row">
                <div class="pile card-placeholder">
                    <div class="empty-pile" @click="resetPile()"></div>
                    <DeckCard v-for="card of pile" :key="card" :value="card.value" :color="card.color" :back="5"
                        :faceUp="card.faceUp" class="pile-card" @click="drawCard()"></DeckCard>
                </div>
                <div class="pile-up card-placeholder">
                    <div v-for="card of pileUp" :key="card"
                        @pointerdown="dragStart($event, card, { type: `pile`, cards: pileUp })"
                        :style="draggingCardStyle(card)">
                        <DeckCard :key="card" :value="card.value" :color="card.color" :back="5" :faceUp="card.faceUp"
                            class="pile-card"></DeckCard>
                    </div>
                </div>
                <div class="card-placeholder" style="opacity:0"></div>
                <div class="card-placeholder spade-pile"
                    @mouseenter="dragEnter({ type: `colors`, color: `spade`, cards: colorPiles.spade })"
                    @mouseleave="dragLeave">
                    <div v-for="card of colorPiles.spade" :key="card"
                        @pointerdown="dragStart($event, card, { type: `colors`, cards: colorPiles.spade })"
                        :style="draggingCardStyle(card)">
                        <DeckCard :key="card" :value="card.value" :color="card.color" :back="5" :faceUp="card.faceUp"
                            class="pile-card"></DeckCard>
                    </div>
                </div>
                <div class="card-placeholder heart-pile"
                    @mouseenter="dragEnter({ type: `colors`, color: `heart`, cards: colorPiles.heart })"
                    @mouseleave="dragLeave">
                    <div v-for="card of colorPiles.heart" :key="card"
                        @pointerdown="dragStart($event, card, { type: `colors`, cards: colorPiles.heart })"
                        :style="draggingCardStyle(card)">
                        <DeckCard :key="card" :value="card.value" :color="card.color" :back="5" :faceUp="card.faceUp"
                            class="pile-card"></DeckCard>
                    </div>
                </div>
                <div class="card-placeholder clover-pile"
                    @mouseenter="dragEnter({ type: `colors`, color: `clover`, cards: colorPiles.clover })"
                    @mouseleave="dragLeave">
                    <div v-for="card of colorPiles.clover" :key="card"
                        @pointerdown="dragStart($event, card, { type: `colors`, cards: colorPiles.clover })"
                        :style="draggingCardStyle(card)">
                        <DeckCard :key="card" :value="card.value" :color="card.color" :back="5" :faceUp="card.faceUp"
                            class="pile-card"></DeckCard>
                    </div>
                </div>
                <div class="card-placeholder diamond-pile"
                    @mouseenter="dragEnter({ type: `colors`, color: `diamond`, cards: colorPiles.diamond })"
                    @mouseleave="dragLeave">
                    <div v-for="card of colorPiles.diamond" :key="card"
                        @pointerdown="dragStart($event, card, { type: `colors`, cards: colorPiles.diamond })"
                        :style="draggingCardStyle(card)">
                        <DeckCard :key="card" :value="card.value" :color="card.color" :back="5" :faceUp="card.faceUp"
                            class="pile-card"></DeckCard>
                    </div>
                </div>
            </div>
            <div class="second-row">
                <div v-for="cardColumn of cardColumns" :key="cardColumn" class="card-placeholder card-column"
                    @mouseenter="dragEnter({ type: `columns`, cards: cardColumn })" @mouseleave="dragLeave">
                    <div v-for="(card, i) of cardColumn" :key="card"
                        @pointerdown="dragStart($event, card, { type: `columns`, cards: cardColumn })"
                        :style="draggingCardStyle(card)" :class="{ dragging: draggingCard === card }">
                        <DeckCard :value="card.value" :color="card.color" :back="5" :faceUp="card.faceUp"
                            class="cards-in-columns" :style="{ top: draggingCards.includes(card) ? 0 : i * 25 + 'px' }">
                        </DeckCard>
                    </div>
                </div>
            </div>
        </section>

    </div>

</template>

<script>
import DeckCard from "../components/DeckCard.vue"
export default {
    name: `solitaire`,
    components: { DeckCard },
    data() {
        return {
            pile: [],
            pileUp: [],
            colorPiles: {
                spade: [],
                heart: [],
                clover: [],
                diamond: [],
            },
            cardColumns: [[], [], [], [], [], [], []],
            draggingCard: null,
            draggingCards: [],
            destination: null,
            origin: null,
            moveHistory: [],
            win: false
        }
    },
    mounted() {
        this.startSolitaire()
        this.checkWin()
    },
    methods: {
        startSolitaire() {
            this.pile = []
            this.pileUp = []
            this.colorPiles = {
                spade: [],
                heart: [],
                clover: [],
                diamond: [],
            }
            this.cardColumns = [[], [], [], [], [], [], []]
            this.draggingCard = null
            this.draggingCards = []
            this.destination = null
            this.origin = null
            this.moveHistory = []
            this.win = false

            let deck = []
            for (let color of ["spade", "heart", "clover", "diamond"]) {
                for (let i = 1; i <= 13; i++) {
                    deck.push({
                        color: color,
                        value: i,
                        faceUp: false,
                    })
                }
            }
            deck = this.shuffle(deck)

            for (let max = 1; max <= 7; max++) {
                for (let i = 0; i < max; i++) {
                    this.cardColumns[max - 1].push(deck.pop())
                }
                const lastCard = this.cardColumns[max - 1].at(-1)
                lastCard.faceUp = true
            }

            this.pile = deck
        },
        undo() {
            const lastMove = this.moveHistory.pop()
            if (lastMove.type === "draw") {
                let lastCard = this.pileUp.pop()
                lastCard.faceUp = false
                this.pile.push(lastCard)
            } else if (lastMove.type === "drag") {
                if (lastMove.cardWasFacedUp) {
                    lastMove.origin.cards.at(-1).faceUp = false
                }
                for (const card of lastMove.cards) {
                    lastMove.origin.cards.push(card)
                }
                for (const card of lastMove.cards) {
                    lastMove.destination.cards.pop()
                }
            }
        },
        checkWin() {
            for (const column of this.cardColumns) {
                for (const card of column) {
                    if (!card.faceUp)
                        return
                }
            }
            this.win = true
        },
        isRed(card) {
            return card.color === 'heart' || card.color === 'diamond'
        },
        shuffle(array) {
            let currentIndex = array.length, randomIndex;

            while (currentIndex != 0) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        },
        drawCard() {
            let lastCard = this.pile.pop()
            lastCard.faceUp = true
            this.pileUp.push(lastCard)
            this.moveHistory.push({
                type: "draw"
            })
        },
        resetPile() {
            if (this.pile.length > 0) {
                return
            }
            let lastCard
            while (lastCard = this.pileUp.pop()) {
                lastCard.faceUp = false
                this.pile.push(lastCard)
            }
        },
        dragStart(event, card, origin) {
            if (!card.faceUp) {
                return
            }
            console.log(event)
            this.draggingCard = card
            this.draggingCard.offsetX = event.offsetX
            this.draggingCard.offsetY = event.offsetY
            this.draggingCard.x = event.pageX - this.draggingCard.offsetX
            this.draggingCard.y = event.pageY - this.draggingCard.offsetY
            this.origin = origin

            const draggingCardIndex = origin.cards.indexOf(card)
            this.draggingCards = origin.cards.slice(draggingCardIndex)
        },
        drag(event) {
            if (!this.draggingCard) {
                return
            }
            this.draggingCard.x = event.pageX - this.draggingCard.offsetX
            this.draggingCard.y = event.pageY - this.draggingCard.offsetY
        },
        dragStop() {
            if (!this.destination) {
                this.draggingCard = null
                this.draggingCards = []
                this.destination = null
                return
            }

            let canCardBePlaced = false
            const destinationIsNotEmpty = this.destination.cards.length > 0

            if (this.destination.type === `columns`) {
                const isEmptyAndKing = !destinationIsNotEmpty && this.draggingCard.value === 13

                const colorIsDifferent = destinationIsNotEmpty && this.isRed(this.draggingCard) !== this.isRed(this.destination.cards.at(-1))

                const originValueIsCorrect = destinationIsNotEmpty && this.draggingCard.value === this.destination.cards.at(-1).value - 1

                canCardBePlaced = isEmptyAndKing || (colorIsDifferent && originValueIsCorrect)
            } else if (this.destination.type === `colors`) {
                const isEmptyAndAce = !destinationIsNotEmpty && this.draggingCard.value === 1 && this.draggingCard.color === this.destination.color

                const colorIsSame = destinationIsNotEmpty && this.draggingCard.color === this.destination.color

                const originValueIsCorrect = destinationIsNotEmpty && this.draggingCard.value === this.destination.cards.at(-1).value + 1

                canCardBePlaced = isEmptyAndAce || (colorIsSame && originValueIsCorrect)
            }

            if (canCardBePlaced) {
                for (const card of this.draggingCards) {
                    this.destination.cards.push(card)
                }
                if (this.origin.cards.length > 0) {
                    for (const card of this.draggingCards) {
                        this.origin.cards.pop()
                    }
                }
                let cardWasFacedUp = false
                if (this.origin.cards.length > 0) {
                    if (!this.origin.cards.at(-1).faceUp) {
                        cardWasFacedUp = true
                    }
                    this.origin.cards.at(-1).faceUp = true
                }

                this.checkWin()

                this.moveHistory.push({
                    type: "drag",
                    origin: this.origin,
                    destination: this.destination,
                    cards: this.draggingCards,
                    cardWasFacedUp: cardWasFacedUp
                })
            }
            this.draggingCard = null
            this.draggingCards = []
        },
        dragEnter(destination) {
            if (!this.draggingCard) {
                return
            }
            this.destination = destination
        },
        dragLeave() {
            this.destination = null
        },
        draggingCardStyle(card) {
            if (!this.draggingCard || !this.draggingCards.includes(card)) {
                return {}
            }

            const cardIndex = this.draggingCards.indexOf(card)

            return {
                top: this.draggingCard.y + 25 * cardIndex + `px`,
                left: this.draggingCard.x + `px`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.board {
    padding: 0 20px;
    max-width: 1200px;
    margin: auto;
    height: 100%;
}

$ratio: calc(200px / 280px);
$card-width: 125px;
$card-height: calc($card-width / $ratio);

.card-placeholder {
    width: $card-width;
    height: $card-height;
    margin: 20px;
    // border: 3px solid rgb(255, 255, 255);
    background: rgba(255, 255, 255, 0.7);
    position: relative;
    border-radius: 7px;
}

.dragging {
    position: fixed;
    z-index: 1;
    width: $card-width;
    height: $card-height;
    pointer-events: none;
}

@media screen and (max-width: 600px) {
    $card-width: calc((100vw - 40px)/7 - 2*3px);
    $card-height: calc($card-width / $ratio);

    .card-placeholder {
        margin: 3px;
        width: $card-width;
        height: $card-height;
    }

    .dragging {
        width: $card-width;
        height: $card-height;
    }
}

.first-row {
    display: flex;
    justify-content: space-between;

    .empty-pile {
        width: 100%;
        height: 100%;
    }

    .pile-card {
        position: absolute;
        top: 0;
        left: 0;
    }

    .spade-pile::before,
    .heart-pile::before,
    .clover-pile::before,
    .diamond-pile::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: 50%;
        opacity: 0.5;
        background-repeat: no-repeat;
        background-position: center;
    }

    .spade-pile::before {
        background-image: url('../assets/img/cards/spade.svg');
    }

    .heart-pile::before {
        background-image: url('../assets/img/cards/heart.svg');
    }

    .clover-pile::before {
        background-image: url('../assets/img/cards/clover.svg');
    }

    .diamond-pile::before {
        background-image: url('../assets/img/cards/diamond.svg');
    }
}

.second-row {
    display: flex;
    justify-content: space-between;
    height: 100%;

    .card-column {
        position: relative;

        .cards-in-columns {
            position: absolute;

        }
    }
}

button {
    font-size: 1.3rem;
    line-height: 0;
}

sl-icon {
    vertical-align: middle;
}

.actions {
    position: fixed;
    top: 30px;
    right: 30px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
}

@media screen and (max-width: 600px) {
    .actions {
        bottom: 10px;
        left: 10px;
        top: initial;
        right: 10px;
        flex-direction: row;
        justify-content: space-around;
    }
}

.win {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(2px);
    z-index: 10;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    .btn {
        font-size: 1.5rem;
    }
}
</style>