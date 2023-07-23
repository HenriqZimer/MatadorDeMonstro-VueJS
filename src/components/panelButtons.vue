<template>
    <div class="panel buttons">
            <template v-if="verificador === 1">
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
    props: ['verificador'],
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
    eventoGameFilho() {
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