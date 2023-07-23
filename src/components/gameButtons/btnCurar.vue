<template>
    <buttonDefault label="Curar" btnCurar @onClick="eventoCuraNeto" />
</template>

<script>
import buttonDefault from '../buttons/buttonDefault.vue'

export default {
    components: {
        buttonDefault
    },
    methods:{
    eventoCuraNeto() {
        console.log('neto')
      this.$emit('curaClicadoNeto');
        }
    }
}
</script>

<style>

</style>