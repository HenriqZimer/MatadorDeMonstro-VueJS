<template>
    <buttonDefault label="Ataque Especial" btnAtaqueEspecial @onClick="eventoEspecialNeto" />
</template>

<script>
import buttonDefault from '../buttons/buttonDefault.vue'

export default {
    components: {
        buttonDefault
    },
    methods:{
    eventoEspecialNeto() {
        console.log('neto')
      this.$emit('especialClicadoNeto');
        }
    }
}
</script>

<style>

</style>