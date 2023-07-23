<template>
    <buttonDefault label="Desistir" btnDesistir @onClick="eventoDesistirNeto" />
</template>

<script>
import buttonDefault from '../buttons/buttonDefault.vue'

export default {
    components: {
        buttonDefault
    },
    methods:{
    eventoDesistirNeto() {
        console.log('neto')
      this.$emit('desistirClicadoNeto');
        }
    }
}
</script>

<style>

</style>