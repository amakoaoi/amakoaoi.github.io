<template>
    <label v-tr for="email" class="email-label">E-mail|Courriel</label>
    <div>
        
        <input type="email" id="email" class="email-input" :placeholder="tr('Enter your E-mail|Entrez votre courriel')" required>

        <svg viewBox="0 0 500 500" id="checkmark">
            <path d="M 151 263 Q 196 271 237 328 Q 252 199 357 148"></path>
            <circle cx="250" cy="250" r="200"></circle>
        </svg>
    </div>
</template>

<script setup>
import {tr} from "../i18n.js"
</script>

<style lang="scss" scoped>
div {
    position: relative;
}

#checkmark {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    padding: 3px;
    display: none;

    path,
    circle {
        stroke: green;
        stroke-width: 30;
        fill: transparent;
        stroke-linejoin: round;
        stroke-linecap: round;
        stroke-dasharray: 1500;
        stroke-dashoffset: 1700;
    }

    path {
        animation: drawing 2000ms linear forwards;
    }

    circle {
        animation: drawing 750ms 400ms linear forwards;
    }
}

@keyframes drawing {
    100% {
        stroke-dashoffset: 0;
    }
}

.email-label {
    position: relative;
    left: 10px;
    font-size: 1.1em;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.email-input {
    border-radius: 50px;
    background-color: white;
    border: none;
    padding: 5px 20px;
    color: black;
    font-size: 1.3em;
    box-shadow: rgba(0, 0, 0, 0.425) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    width: 100%;

    &:not(:focus):not(:placeholder-shown):invalid {
        background: #c60606;
        animation: headshake 100ms cubic-bezier(.4, .1, .6, .9) 2;
    }

    &:focus {
        outline: none;
        box-shadow: rgba(140, 35, 211, 0.7) 0px 0px 5px 0px, rgba(127, 20, 189, 0.1) 0px 0px 1px 0px;
    }

    &::after {
        content: url(#checkmark);
    }

    &:not(:focus):valid + #checkmark {
        display: block;

    }
}

@keyframes headshake {
    25% {
        transform: translateX(2%);
    }

    75% {
        transform: translateX(2% * -1);
    }
}
</style>