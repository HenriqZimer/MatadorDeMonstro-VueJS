<template>
    <div class="panel buttons">
            <template v-if="henrique">
                <btnAtacar @ataqueClicadoNeto="eventoAtaqueFilho" />
                <btnAtaqueEspecial @especialClicadoNeto="eventoEspecialFilho" />
                <btnCurar @curaClicadoNeto="eventoCuraFilho"/>
                <btnDesistir @desistirClicadoNeto="eventoDesistirFilho" />
            </template>
                <btnNovoJogo v-else @gameClicadoNeto="eventoGameFilho" />
        </div>
</template>

<script>
import btnAtacar from './gameButtons/btnAtacar.vue'
import btnAtaqueEspecial from './gameButtons/btnAtaqueEspecial.vue'
import btnCurar from './gameButtons/btnCurar.vue'
import btnDesistir from './gameButtons/btnDesistir.vue'
import btnNovoJogo from './gameButtons/btnNovoJogo.vue'

export default {
    components: {
        btnAtacar,
        btnAtaqueEspecial,
        btnCurar,
        btnDesistir,
        btnNovoJogo
    },
    methods: {
    eventoAtaqueFilho() {
        console.log('filho')
      this.$emit('eventoAtaquePai');
    },
    eventoCuraFilho() {
        console.log('filho')
      this.$emit('eventoCuraPai');
    },
    eventoEspecialFilho() {
        console.log('filho')
      this.$emit('eventoEspecialPai');
    },
    eventoDesistirFilho() {
        console.log('filho')
      this.$emit('eventoDesistirPai');
    },
    eventoGameFilho() {
        console.log('filho')
      this.$emit('eventoGamePai');
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