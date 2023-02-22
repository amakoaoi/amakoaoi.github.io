<template>
    <section>
        <h2>Carte à jouer</h2>
        <div class="card-section">
            <div style="width: 250px; cursor: pointer;">
                <DeckCard :value="cardValue" :color="cardColor" :back="cardBack" :faceUp="faceUp" @click="faceUp = !faceUp">
                </DeckCard>
            </div>
            <div class="card-selection">
                <label for="card">Choisir la valeur :</label>
                <select v-model="cardValue" name="card" id="card">
                    <option v-for="i in 10" :value="i">{{ i }}</option>
                    <option :value="11">Valet</option>
                    <option :value="12">Dame</option>
                    <option :value="13">Roi</option>
                </select>
                <label for="color">Choisir la couleur :</label>
                <sl-radio-group name="color" id="color" :value="cardColor" @sl-input="cardColor = $event.target.value">
                    <sl-radio-button pill size="large" value="spade">
                        <img src="../assets/img/cards/spade.svg" alt="spade" class="color-img">
                    </sl-radio-button>
                    <sl-radio-button pill size="large" value="clover">
                        <img src="../assets/img/cards/clover.svg" alt="clover" class="color-img">
                    </sl-radio-button>
                    <sl-radio-button pill size="large" value="heart">
                        <img src="../assets/img/cards/heart.svg" alt="heart" class="color-img">
                    </sl-radio-button>
                    <sl-radio-button pill size="large" value="diamond">
                        <img src="../assets/img/cards/diamond.svg" alt="diamond" class="color-img">
                    </sl-radio-button>
                </sl-radio-group>
                <label for="back">Changer le dos de la carte :</label>
                <sl-range v-model="cardBack" id="back" min="1" max="9"></sl-range>
                <button class="btn" @click="faceUp = !faceUp">Retourner la carte</button>
            </div>
        </div>

    </section>
</template>

<script setup>
import DeckCard from "../components/DeckCard.vue"
let cardValue = $ref(1)
let cardColor = $ref("spade")
let faceUp = $ref(true)
let cardBack =$ref(1)
</script>

<style lang="scss" scoped>
section {
    margin: 20px auto;
    max-width: 50%;
    color: black;
    background: rgba(255, 255, 255, 0.7);
    padding: 30px;
    border-radius: 10px;

    h2 {
        margin-bottom: 1em;
    }
}

.card-section {
    display: flex;
    justify-content: center;
}

.color-img {
    height: 30px;
}

.card-selection {
    padding: 0 30px;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    select {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    label {
        margin-bottom: 10px;
    }
    sl-radio-group {
        margin-bottom: 20px;
    }

    .btn {
        font-size: 1.5rem;
        margin-top: 20px;
    }

    sl-radio-button::part(button--checked),
    sl-radio-button::part(button):hover {
        border-color: #574867;
        background-color: #574867;
    }

    sl-range {
        --track-color-active: #7e43b9;
        --track-color-inactive: #574867;
        &::part(input)::-moz-range-thumb, &::part(input)::-webkit-slider-thumb {
            background-color: #7e43b9;
        }
    }
}
</style>