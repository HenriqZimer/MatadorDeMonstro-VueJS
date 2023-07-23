<template>
    <buttonDefault label="Ataque" btnAtaque @onClick="eventoAtaqueNeto" />
</template>

<script>
import buttonDefault from '../buttons/buttonDefault.vue'

export default {
    components: {
        buttonDefault
    },
    methods:{
    eventoAtaqueNeto() {
        console.log('neto')
      this.$emit('ataqueClicadoNeto');
        }
    }
}
</script>

<style>

</style>