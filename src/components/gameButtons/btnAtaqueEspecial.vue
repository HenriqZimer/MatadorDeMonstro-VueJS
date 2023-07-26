<template>
  <buttonDefault label="Super Kamehameha" btnAtaqueEspecial @onClick="eventoEspecialNeto" />
</template>

<script>
import buttonDefault from '../buttons/buttonDefault.vue'

export default {
  components: {
    buttonDefault
  },
  methods:{
		eventoEspecialNeto() {
			this.$emit('especialClicadoNeto');
		}
  }
}
</script>

<style>

</style>