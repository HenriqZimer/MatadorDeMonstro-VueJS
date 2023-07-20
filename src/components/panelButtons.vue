<template>
    <div class="panel buttons">
            <template>
                <btnAtacar  />
                <btnAtaqueEspecial />
                <btnCurar  />
                <btnDesistir />
            </template>
                <btnNovoJogo />
        </div>
</template>

<script>
import btnAtacar from '/src/components/gameButtons/btnAtacar.vue'
import btnAtaqueEspecial from '/src/components/gameButtons/btnAtaqueEspecial.vue'
import btnCurar from '/src/components/gameButtons/btnCurar.vue'
import btnDesistir from '/src/components/gameButtons/btnDesistir.vue'
import btnNovoJogo from '/src/components/gameButtons/btnNovoJogo.vue'


export default {
    components: {
        btnAtacar,
        btnAtaqueEspecial,
        btnCurar,
        btnDesistir,
        btnNovoJogo
    },
}
</script>

<style>
.buttons {
    display: flex;
    justify-content: center;
}
</style>