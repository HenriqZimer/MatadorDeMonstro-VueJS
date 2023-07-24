<template>
    <buttonDefault label="Semente dos Deuses" btnCurar @onClick="eventoCuraNeto" />
</template>

<script>
import buttonDefault from '../buttons/buttonDefault.vue'

export default {
    components: {
        buttonDefault
    },
    methods:{
    eventoCuraNeto() {
    this.$emit('curaClicadoNeto');
        }
    }
}
</script>

<style>

</style>