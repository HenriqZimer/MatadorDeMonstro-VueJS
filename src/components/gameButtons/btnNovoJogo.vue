<template>
    <buttonDefault label="Novo Game" btnNewGame @onClick="startGame" />
</template>

<script>
import buttonDefault from '../buttons/buttonDefault.vue'

export default {
    components: {
        buttonDefault
    }
}
</script>

<style>

</style>