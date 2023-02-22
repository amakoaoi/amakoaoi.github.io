<template>
    <div class="deck-card" :class="{ upfront: faceUp }">
        <div class="card-inner">
            <div class="front">
                <svg viewBox="0 0 100 140">
                    <text x="16" y="15" text-anchor="end" size="10" :fill="textColor">{{ textValue }}</text>
                    <image :xlink:href="colorImageURL" x="17" y="5" height="10" width="10" />
                    <text x="84" y="135" text-anchor="end" size="10" :fill="textColor">{{ textValue }}</text>
                    <image :xlink:href="colorImageURL" x="85" y="125" height="10" width="10" />
                    <svg x="10" y="20" width="80" height="100">
                        <image v-for="coord of cardsSigns" :key="coord.x + '' + coord.y" :xlink:href="coord.imageURL"
                            :x="coord.x" :y="coord.y" :height="coord.size" :width="coord.size" />
                    </svg>
                </svg>
            </div>
            <div class="back" :style="{ background: `url('${backgroundImageURL}')` }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: `DeckCard`,
    props: {
        value: {
            type: Number,
            required: true,
            validator(value) {
                return value >= 1 && value <= 13
            },
        },
        color: {
            required: true,
            type: String,
            validator(value) {
                return ["spade", "clover", "heart", "diamond"].includes(value)
            },
        },
        back: {
            type: Number,
            default: 1,
        },
        faceUp: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {}
    },
    computed: {
        colorImageURL() {
            return new URL(`../assets/img/cards/${this.color}.svg`, import.meta.url).href
        },
        backgroundImageURL() {
            return new URL(`../assets/img/cards/cards_back_${this.back}.svg`, import.meta.url).href
        },
        textValue() {
            switch (this.value) {
                case 1:
                    return `A`;
                case 11:
                    return `J`;
                case 12:
                    return `Q`;
                case 13:
                    return `K`;
                default:
                    return this.value;
            }
        },
        textColor() {
            switch (this.color) {
                case `heart`:
                case `diamond`:
                    return `#c60606`;
                case `spade`:
                case `clover`:
                default:
                    return `black`;
            }
        },
        cardsSigns() {
            let imageURL = this.colorImageURL;
            let size = 18;
            let coordinates = [];
            let l = 5;
            let r = 80 - size - l;
            let mid = 80 / 2 - size / 2;
            let quarter = 100 / 4;
            let quarterGap = (quarter - size) / 2;
            let third = 100 / 3;
            let thirdGap = (third - size) / 2;
            let half = 100 / 2;
            let halfGap = (half - size) / 2;

            const redOrBlack = this.color === `spade` || this.color === `clover` ? `black` : `red`;

            switch (this.value) {
                case 1:
                    size = 50;
                    coordinates = [{ x: 80 / 2 - size / 2, y: (half - size) / 2 + half / 2 }]
                    break;
                case 2:
                    coordinates = [
                        { x: l, y: halfGap },
                        { x: r, y: halfGap + half },
                    ]
                    break;
                case 3:
                    coordinates = [
                        { x: l, y: halfGap },
                        { x: mid, y: halfGap + half / 2 },
                        { x: r, y: halfGap + half },
                    ]
                    break;
                case 4:
                    coordinates = [
                        { x: l, y: halfGap }, { x: r, y: halfGap },
                        { x: l, y: halfGap + half }, { x: r, y: halfGap + half },
                    ]
                    break;
                case 5:
                    coordinates = [
                        { x: l, y: halfGap }, { x: r, y: halfGap },
                        { x: mid, y: halfGap + half / 2 },
                        { x: l, y: halfGap + half }, { x: r, y: halfGap + half },
                    ]
                    break;
                case 6:
                    coordinates = [
                        { x: l, y: thirdGap }, { x: r, y: thirdGap },
                        { x: l, y: thirdGap + third }, { x: r, y: thirdGap + third },
                        { x: l, y: thirdGap + third * 2 }, { x: r, y: thirdGap + third * 2 },
                    ]
                    break;
                case 7:
                    coordinates = [
                        { x: l, y: thirdGap }, { x: r, y: thirdGap },
                        { x: mid, y: thirdGap + third / 2 },
                        { x: l, y: thirdGap + third }, { x: r, y: thirdGap + third },
                        { x: l, y: thirdGap + third * 2 }, { x: r, y: thirdGap + third * 2 },
                    ]
                    break;
                case 8:
                    coordinates = [
                        { x: l, y: quarterGap }, { x: r, y: quarterGap },
                        { x: l, y: quarterGap + quarter }, { x: r, y: quarterGap + quarter },
                        { x: l, y: quarterGap + quarter * 2 }, { x: r, y: quarterGap + quarter * 2 },
                        { x: l, y: quarterGap + quarter * 3 }, { x: r, y: quarterGap + quarter * 3 },
                    ]
                    break;
                case 9:
                    coordinates = [
                        { x: l, y: quarterGap }, { x: r, y: quarterGap },
                        { x: mid, y: quarterGap + 1.5 * quarter },
                        { x: l, y: quarterGap + quarter }, { x: r, y: quarterGap + quarter },
                        { x: l, y: quarterGap + quarter * 2 }, { x: r, y: quarterGap + quarter * 2 },
                        { x: l, y: quarterGap + quarter * 3 }, { x: r, y: quarterGap + quarter * 3 },
                    ]
                    break;
                case 10:
                    coordinates = [
                        { x: l, y: quarterGap }, { x: r, y: quarterGap },
                        { x: mid, y: quarterGap + quarter / 2 },
                        { x: l, y: quarterGap + quarter }, { x: r, y: quarterGap + quarter },
                        { x: l, y: quarterGap + quarter * 2 }, { x: r, y: quarterGap + quarter * 2 },
                        { x: mid, y: quarterGap + 2.5 * quarter },
                        { x: l, y: quarterGap + quarter * 3 }, { x: r, y: quarterGap + quarter * 3 },
                    ]
                    break;
                case 11:
                    size = 60;
                    coordinates = [{ x: 80 / 2 - size / 2, y: (half - size) / 2 + half / 2 }]
                    imageURL = new URL(`../assets/img/cards/${redOrBlack}_jack.svg`, import.meta.url).href
                    break;
                case 12:
                    size = 70;
                    coordinates = [{ x: 80 / 2 - size / 2, y: (half - size) / 2 + half / 2 }]
                    imageURL = new URL(`../assets/img/cards/${redOrBlack}_queen.svg`, import.meta.url).href
                    break;
                case 13:
                    size = 70;
                    coordinates = [{ x: 80 / 2 - size / 2, y: (half - size) / 2 + half / 2 }]
                    imageURL = new URL(`../assets/img/cards/${redOrBlack}_king.svg`, import.meta.url).href
                    break;
            }

            return coordinates.map(coord => {
                return {
                    x: coord.x,
                    y: coord.y,
                    imageURL: imageURL,
                    size: size
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.deck-card {
    position: relative;
    perspective: 2000px;
    width: 100%;
    padding-top: 140%;
    user-select: none;

    .card-inner {
        position: absolute;
        top: 0;
        left: 0;
        transform-style: preserve-3d;
        transform: rotateY(180deg);
        width: 100%;
        height: 100%;
        transition: all 1000ms;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius: 13px;
        border: 1px solid black;

        .front,
        .back {
            border-radius: 13px;
            width: 100%;
            height: 100%;
            position: absolute;
            backface-visibility: hidden;
        }

        .front {
            background: white;
            border-radius: 13px;
        }

        .back {
            background: url("@/assets/img/cards/cards_back_1.svg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            top: 0;
            left: 0;
            transform: rotateY(180deg);
        }
    }

    &.upfront .card-inner {
        transform: rotateY(0deg);
    }
}
</style>