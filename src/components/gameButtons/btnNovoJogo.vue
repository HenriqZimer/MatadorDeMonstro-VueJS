<template>
    <buttonDefault label="Novo Game" btnNewGame @onClick="eventoGameNeto" />
</template>

<script>
import buttonDefault from '../buttons/buttonDefault.vue'

export default {
    components: {
        buttonDefault
    },
    methods:{
    eventoGameNeto() {
        console.log('neto')
      this.$emit('gameClicadoNeto');
        }
    }
}
</script>

<style>

</style>