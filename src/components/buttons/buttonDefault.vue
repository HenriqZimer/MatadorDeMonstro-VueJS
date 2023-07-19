<template>
    <button class="button" @click="$emit('onClick', label)" :class="{ 
        btnNewGame, 
        btnAtaque, 
        btnAtaqueEspecial, 
        btnCurar, 
        btnDesistir 
        }"> {{ label }}</button>
</template>

<script>
export default {
    props: {
        label: {},
        btnNewGame: { type: Boolean },
        btnAtaque: { type: Boolean },
        btnAtaqueEspecial: { type: Boolean },
        btnCurar: { type: Boolean },
        btnDesistir: { type: Boolean },
    }
}
</script>

<style>
.button {
    padding: 5px 10px;
    margin: 0px 10px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 1.1rem;
}

.button:active{
    background-color: #ccc;
}

.btnNewGame {
    background-color: #4253af;
    color: #fff;
}

.btnAtaque {
    background-color: #e51c23;
    color: #fff;
}

.btnAtaqueEspecial {
    background-color: #ff9800;
    color: #000;
}

.btnCurar {
    background-color: #259b24;
    color: #FFF;
}

.btnDesistir {
    background-color: #f00abe;
    color: #000;
}
</style>
