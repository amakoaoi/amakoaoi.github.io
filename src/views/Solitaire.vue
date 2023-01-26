<template>
    <div @mousemove="drag" @mouseup="dragStop" style="position: fixed; top: 0; bottom: 0; left: 0; right: 0;">
        <section class="board" @drop="drop">
            <!-- <DeckCard v-for="i in 13" :key="i" :value="i" color="diamond" :back="5" :faceUp="false"></DeckCard> -->
            <div class="first-row">
                <div class="pile card-placeholder">
                    <div class="empty-pile" @click="resetPile()"></div>
                    <DeckCard v-for="card of pile" :key="card" :value="card.value" :color="card.color" :back="5"
                        :faceUp="card.faceUp" class="pile-card" @click="drawCard()"></DeckCard>
                </div>
                <div class="pile-up card-placeholder">
                    <div v-for="card of pileUp" :key="card"
                        @mousedown="dragStart($event, card, { type: `pile`, cards: pileUp })"
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
                        @mousedown="dragStart($event, card, { type: `colors`, cards: colorPiles.spade })"
                        :style="draggingCardStyle(card)">
                        <DeckCard :key="card" :value="card.value" :color="card.color" :back="5" :faceUp="card.faceUp"
                            class="pile-card"></DeckCard>
                    </div>
                </div>
                <div class="card-placeholder heart-pile"
                    @mouseenter="dragEnter({ type: `colors`, color: `heart`, cards: colorPiles.heart })"
                    @mouseleave="dragLeave">
                    <div v-for="card of colorPiles.heart" :key="card"
                        @mousedown="dragStart($event, card, { type: `colors`, cards: colorPiles.heart })"
                        :style="draggingCardStyle(card)">
                        <DeckCard :key="card" :value="card.value" :color="card.color" :back="5" :faceUp="card.faceUp"
                            class="pile-card"></DeckCard>
                    </div>
                </div>
                <div class="card-placeholder clover-pile"
                    @mouseenter="dragEnter({ type: `colors`, color: `clover`, cards: colorPiles.clover })"
                    @mouseleave="dragLeave">
                    <div v-for="card of colorPiles.clover" :key="card"
                        @mousedown="dragStart($event, card, { type: `colors`, cards: colorPiles.clover })"
                        :style="draggingCardStyle(card)">
                        <DeckCard :key="card" :value="card.value" :color="card.color" :back="5" :faceUp="card.faceUp"
                            class="pile-card"></DeckCard>
                    </div>
                </div>
                <div class="card-placeholder diamond-pile"
                    @mouseenter="dragEnter({ type: `colors`, color: `diamond`, cards: colorPiles.diamond })"
                    @mouseleave="dragLeave">
                    <div v-for="card of colorPiles.diamond" :key="card"
                        @mousedown="dragStart($event, card, { type: `colors`, cards: colorPiles.diamond })"
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
                        @mousedown="dragStart($event, card, { type: `columns`, cards: cardColumn })"
                        :style="draggingCardStyle(card)">
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
            origin: null
        }
    },
    mounted() {
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
    methods: {
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
                const isEmptyAndAce =  !destinationIsNotEmpty && this.draggingCard.value === 1 && this.draggingCard.color === this.destination.color

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
                if (this.origin.cards.length > 0)
                    this.origin.cards.at(-1).faceUp = true
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
                position: `fixed`,
                zIndex: 1,
                width: `125px`,
                height: `175px`,
                top: this.draggingCard.y + 25 * cardIndex + `px`,
                left: this.draggingCard.x + `px`,
                pointerEvents: `none`
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

.card-placeholder {
    $ratio: calc(200px / 280px);
    $card-width: 125px;
    $card-height: calc($card-width / $ratio);
    width: $card-width;
    height: $card-height;
    margin: 20px;
    border: 3px solid rgb(255, 255, 255);
    position: relative;
    border-radius: 5px;
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
</style>