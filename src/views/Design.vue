<template>
    <section>
        <h2 v-tr>Playing card|Carte à jouer</h2>
        <div class="card-section">
            <div style="width: 250px; cursor: pointer;">
                <DeckCard :value="cardValue" :color="cardColor" :back="cardBack" :faceUp="faceUp" @click="faceUp = !faceUp">
                </DeckCard>
            </div>
            <div class="card-selection">
                <label v-tr for="card">Select the value :|Choisir la valeur :</label>
                <select v-model="cardValue" name="card" id="card">
                    <option v-for="i in 10" :value="i">{{ i }}</option>
                    <option v-tr :value="11">Jack|Valet</option>
                    <option v-tr :value="12">Queen|Dame</option>
                    <option v-tr :value="13">King|Roi</option>
                </select>
                <label v-tr for="color">Select the color :Choisir la couleur :</label>
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
                <label v-tr for="back">Change the back of the card:|Changer le dos de la carte :</label>
                <sl-range v-model="cardBack" id="back" min="1" max="9"></sl-range>
                <button v-tr class="btn" @click="faceUp = !faceUp">Return the card|Retourner la carte</button>
            </div>
        </div>
    </section>
    <section>
        <h2 v-tr>Animation of a loss of life|Animation d'une perte de vie</h2>
        <div class="heart-section">
            <button v-tr class="btn" @click="startAnimation()">Start the animation|Lancer l'animation</button>
            <div class="animation">
                <img src="../assets/img/cards/heart.svg" alt="life" :class="{ 'heart-animation': animationStarted }">
            </div>
        </div>
    </section>

    <section>
        <h2 v-tr>Form validation|Validation de formulaire</h2>
        <div>
            <p v-tr>Try to write a valid email, as well as an invalid email to see the animations.
                |
                Essayez d'écrire un courriel valide, ainsi qu'un courriel invalide pour voir les animations.</p>
            <EmailInput></EmailInput>
        </div>
    </section>
    
    <section @mousemove="generateParticles($event)" 
        @click="explodingParticles($event)" style="height: 600px; user-select: none;">
        <h2 v-tr>Glitters|Paillettes</h2>
        <p v-tr>Hover or click in this section, we'll put some glitters in your lives.|Survolez ou cliquez dans cette section, on va mettre des
            paillettes dans vos vies.</p>
        <div v-for="particle in particles" :style="particle.position" class="particle-container">
            <div :class="{ particle: particle.start }" :style="particle.style"></div>
        </div>
    </section>
</template>

<script setup>
import DeckCard from "../components/DeckCard.vue"
import EmailInput from "../components/EmailInput.vue"

let cardValue = $ref(1)
let cardColor = $ref("spade")
let faceUp = $ref(true)
let cardBack = $ref(1)
let animationStarted = $ref(false)

function startAnimation() {

    animationStarted = true
    setTimeout(() => {
        animationStarted = false
    }, 2000)
}

let particles = $ref([])

for (let i = 0; i < 100; i++) {
    const hue = getRandomInt(0, 361)
    particles.push({
        start: false,
        position: {
            top: 0,
            left: 0,
        },
        style: {
            backgroundImage: `radial-gradient(hsl(${hue}, 100%, 80%),
                hsl(${hue}, 100%, 80%) 10%,
                hsla(${hue}, 100%, 80%, 0) 56%)`,
        }
    })
}

let i = 0

let wait = false
function generateParticles(event, waitParticles = true) {
    if (wait && waitParticles) {
        return
    }
    let particlesRange = waitParticles? 40 : 80
    let particlesTop = waitParticles? 0 : -80

    particles[i].start = true

    const y = getRandomInt(particlesTop, particlesRange)
    const maxX = Math.sqrt(Math.pow(particlesRange, 2) - Math.pow(y, 2))
    const x = getRandomInt(-maxX, maxX)
    particles[i].position.top = event.clientY + y + "px"
    particles[i].position.left = event.clientX + x + "px"

    const index = i
    setTimeout(() => particles[index].start = false, 1500)

    if (waitParticles) {
        wait = true
        setTimeout(() => wait = false, 10)
    }
    i++

    if (i >= 100) {
        i = 0
    }
}

function explodingParticles(event) {
    for (let i = 0; i < 15; i++) {
        generateParticles(event, false)
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
</script>

<style lang="scss" scoped>
section {
    margin: 20px auto;
    max-width: 50%;
    color: black;
    background: rgba(255, 255, 255, 0.7);
    padding: 30px;
    border-radius: 10px;
    overflow: hidden;

    p {
        margin-bottom: 10px;
    }

    h2 {
        margin-bottom: 1em;
        user-select: none;
    }

}



.particle-container {
    position: fixed;

    div {
        opacity: 0;
    }

    .particle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        animation: falling 1s forwards;
    }
}

@keyframes falling {
    0% {
        opacity: 1;
    }

    70% {
        opacity: 1;
    }

    100% {
        transform: translateY(30px) scale(0.5);
        opacity: 0;
    }
}

.heart-section {
    text-align: center;

    .animation {
        height: 100px;
        width: 120px;
        margin: auto;
        padding-top: 30px;

        img {
            width: 50px;
        }
    }

    .btn {
        font-size: 1.5rem;
        margin: auto;
    }
}

.heart-animation {
    animation: heartlost 2s forwards;

}

@keyframes heartlost {
    25% {
        transform: scaleY(0.7) scaleX(1.3);
    }

    30% {
        transform: scaleY(1.2) scaleX(0.9);
    }

    50% {
        transform: translateY(-15px) translateX(20px);
    }

    99% {
        opacity: 1;
    }

    100% {
        transform-origin: top;
        transform: translateY(200px) translateX(20px) scaleY(8);
        opacity: 0;
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

        &::part(input)::-moz-range-thumb,
        &::part(input)::-webkit-slider-thumb {
            background-color: #7e43b9;
        }
    }
}

@media screen and (max-width: 600px) {
    section {
        max-width: 100%;
        border-radius: 0;

        &:first-child {
            margin-top: 0;
            padding-top: 50px;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    .card-section {
        flex-direction: column;
        align-items: center;
    }

    .card-selection {
        padding: 0 30px;
        font-size: 1.2rem;
        margin-top: 10px;
    }
}
</style>