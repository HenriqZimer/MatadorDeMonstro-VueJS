<template>
    <div class="panel buttons">
            <template>
                <buttonDefault label="Ataque" btnAtaque @onClick="attack" />
                <buttonDefault label="Ataque Especial" btnAtaqueEspecial @onClick="attack" />
                <buttonDefault label="Curar" btnCurar @onClick="healAndHurt"/>
                <buttonDefault label="Desistir" btnDesistir @onClick="running"/>
            </template>
                <buttonDefault label="Novo Game" btnNewGame @onClick="startGame"/>
        </div>
</template>

<script>
import buttonDefault from '@/components/buttons/buttonDefault.vue'

export default {
    components: {
        buttonDefault
    },
}
</script>

<style>
.buttons {
    display: flex;
    justify-content: center;
}
</style>