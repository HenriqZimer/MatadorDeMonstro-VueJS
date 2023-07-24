<template>
    <buttonDefault label="Kaioken Ataque" btnAtaque @onClick="eventoAtaqueNeto" />
</template>

<script>
import buttonDefault from '../buttons/buttonDefault.vue'

export default {
    components: {
        buttonDefault
    },
    methods:{
    eventoAtaqueNeto() {
    this.$emit('ataqueClicadoNeto');
        }
    }
}
</script>

<style>

</style>