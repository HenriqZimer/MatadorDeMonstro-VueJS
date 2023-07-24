<template>
    <div class="matador">
        <panelScores 
            :playerLife="playerLife" 
            :monsterLife="monsterLife" />

        <panelResult 
            :playerLife="playerLife" 
            :monsterLife="monsterLife"
            @eventoGamePai="Game" />

        <panelButtons 
            @eventoAtaquePai="Ataque"
            @eventoEspecialPai="Especial"
            @eventoCuraPai="Cura" 
            @eventoDesistirPai="Desistir"
            :playerLife="playerLife"
            :monsterLife="monsterLife" />

    </div>
</template>

<script>
import panelButtons from "../components/panelButtons.vue"
import panelResult from "../components/panelResult.vue"
import panelScores from "../components/panelScores.vue"

export default {

components: {
        panelButtons,
        panelResult,
        panelScores,
    }, 
data() {
    return {
        playerLife: 100,
        monsterLife: 100,
        }
    },
methods: {
    atualizarDados(health) {
        this.playerLife = health.playerLife;
        this.monsterLife = health.monsterLife;
        },
    Ataque() { 
        this.monsterLife -= Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        this.playerLife -= Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        },
    Especial() { 
        this.monsterLife -= Math.floor(Math.random() * (15 - 9 + 1)) + 5;
        this.playerLife -= Math.floor(Math.random() * (12 - 7 + 1)) + 5;
        },
    Cura() { 
        this.playerLife += Math.floor(Math.random() * (10 - 8 + 1)) + 8;
        this.playerLife -= Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        },
    Desistir(){
        // this.playerLife = 100
        // this.monsterLife = 100
        this.reloadPageAfterDelay()
        },
    Game(){
        window.location.reload()
        },
        reloadPageAfterDelay() {
        setTimeout(() =>  {
            window.location.reload();
    }, 2000);
    }
    
}
}
</script>

<style>
html {
    font-family: 'Montserrat', sans-serif;
}
#app {
    display: flex;
    flex-direction: column;
}
.panel {
    margin: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
</style>