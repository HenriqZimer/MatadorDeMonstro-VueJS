<template>
    <div class="matador">
        <panelScores  :playerLife="playerLife" :monsterLife="monsterLife" @healthBar="atualizarDados"/>
        <panelResult />
        <panelButtons />
        <panelLogs/>
    </div>
</template>

<script>
import panelButtons from "../components/panelButtons"
import panelLogs from "../components/panelLogs"
import panelResult from "../components/panelResult"
import panelScores from "../components/panelScores"


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
        }
    },
methods: {
    updateData(health) {
      
      // Aqui, você receberá os dados das props do componente filho

    this.playerLife = health.playerLife;
    this.monsterLife = health.monsterLife;
        },
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            if(this.monsterLife > 0){
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')}
        },
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(max, min) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`,'player')
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({text, cls})
        }
    },
   watch: {
        hasResult(value) {
            if (value) this.running = false
        }
   },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
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