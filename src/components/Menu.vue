<template>
    <svg id="menu-btn" viewBox="0 0 20 20" @click="drawer.show()">
        <line x1="0" y1="5" x2="20" y2="5" stroke="black"></line>
        <line x1="0" y1="10" x2="20" y2="10" stroke="black"></line>
        <line x1="0" y1="15" x2="20" y2="15" stroke="black"></line>
    </svg>

    <sl-drawer ref="drawer" label="Menu" placement="start" class="drawer-placement-start">
        <sl-menu>
            <sl-menu-item v-tr @click="navigateTo(`/`)">Home|Accueil</sl-menu-item>

            <sl-divider></sl-divider>

            <sl-menu-item v-tr @click="navigateTo(`/design`)">Web Design|Design Web</sl-menu-item>

            <sl-divider></sl-divider>

            <sl-menu-label v-tr class="desktop-only">Games|Jeux</sl-menu-label>
            <sl-menu-item class="desktop-only" @click="navigateTo(`/solitaire`)">Solitaire</sl-menu-item>
            <sl-menu-item @click="navigateTo(`/sudoku`)">Sudoku</sl-menu-item>

            <sl-divider></sl-divider>

            <sl-menu-item @click="navigateTo(`/rig`)">Rig</sl-menu-item>
        </sl-menu>
        <div class="flags">
            <img src="../assets/img/en.svg" alt="English" :class="{ 'selected-language': language === `en`}" @click="changeLanguage(`en`)">
            <img src="../assets/img/fr.svg" alt="Français" :class="{ 'selected-language': language === `fr`}" @click="changeLanguage(`fr`)">
        </div>
    </sl-drawer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {setLanguage, getLanguage} from "../i18n.js"

let language = $ref(getLanguage())

function changeLanguage(newLanguage) {
    language = newLanguage
    setLanguage(language)
}

const drawer = $ref(null)

const router = useRouter()

function navigateTo(path) {
    router.push(path)
    drawer.hide()
}
</script>

<style lang="scss" scoped>
.flags {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 20px;
        display: inline-block;
        margin: 10px 5px;
        cursor: pointer;

        &:hover {
            box-shadow: rgb(255, 255, 255) 0px 0px 7px;
        }
    }
}

.selected-language {
    height: 30px !important;
}

#menu-btn {
    position: fixed;
    top: 15px;
    left: 15px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    padding: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 10;
}

a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
}
</style>