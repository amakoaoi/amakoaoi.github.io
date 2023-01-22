<template>
    <div>
        <DeckCard v-for="i in 13" :key="i" :value="i" color="diamond" :back="5" :faceUp="true"></DeckCard>
    </div>
</template>

<script>
import DeckCard from "../components/DeckCard.vue"
export default {
    name: `design`,
    components: {DeckCard}
}
</script>

<style lang="scss" scoped>

</style>