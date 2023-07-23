<template>
    <div class="matador">
        <panelScores 
            :playerLife="playerLife" 
            :monsterLife="monsterLife" 
            @healthBar="atualizarDados"/>
        <panelResult />
        <panelButtons 
            @eventoAtaquePai="Ataque"
            @eventoEspecialPai="Especial"
            @eventoCuraPai="Cura" 
            @eventoDesistirPai="Desistir"
            @eventoGamePai="Game" :verificador = "contador"/>
        <panelLogs/>
    </div>
</template>

<script>
import panelButtons from "../components/panelButtons.vue"
import panelLogs from "../components/panelLogs.vue"
import panelResult from "../components/panelResult.vue"
import panelScores from "../components/panelScores.vue"

export default {

components: {
        panelButtons,
        panelLogs,
        panelResult,
        panelScores,
    }, 
data() {
    return {
        playerLife: 100,
        monsterLife: 100,
        contador: 0
        }
    },
methods: {
    updateData(health) {
        this.playerLife = health.playerLife;
        this.monsterLife = health.monsterLife;
        },
    Ataque() { 
        this.playerLife -= 10
        this.monsterLife -= 10
        },
    Cura() { 
        this.playerLife += 30
        this.monsterLife += 30
        },
    Especial() { 
        // this.playerLife -= 100
        this.monsterLife -= 100
        },
    Desistir(){
        window.location.reload()
        },
    Game(){
        this.contador = 1
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