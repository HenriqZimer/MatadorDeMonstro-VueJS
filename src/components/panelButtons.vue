<template>
  <div v-if="playerLife > 0 && monsterLife > 0"
		class="panel buttons">
      <btnAtacar @ataqueClicadoNeto="eventoAtaqueFilho" />
      <btnAtaqueEspecial @especialClicadoNeto="eventoEspecialFilho" />
      <btnCurar @curaClicadoNeto="eventoCuraFilho"/>
      <btnDesistir @desistirClicadoNeto="eventoDesistirFilho" />
  </div>
</template>

<script>
import btnAtacar from './gameButtons/btnAtacar.vue'
import btnAtaqueEspecial from './gameButtons/btnAtaqueEspecial.vue'
import btnCurar from './gameButtons/btnCurar.vue'
import btnDesistir from './gameButtons/btnDesistir.vue'

export default {
  props: ['playerLife', 'monsterLife'], 
  components: {
    btnAtacar,
    btnAtaqueEspecial,
    btnCurar,
    btnDesistir,
  },
  methods: {
    eventoAtaqueFilho() {
		this.$emit('eventoAtaquePai');
    },
    eventoCuraFilho() {
      this.$emit('eventoCuraPai');
    },
    eventoEspecialFilho() {
      this.$emit('eventoEspecialPai');
    },
    eventoDesistirFilho() {
    this.$emit('eventoDesistirPai');
    },
  }
}
</script>

<style>
.buttons {
  display: flex;
  justify-content: center;
}
</style>