<template>
    <div class="panel scores">
            <div class="score">
                <h1>Jogador</h1>
                <div class="life-bar">
                    <div class="life"
                    :class="{danger: playerLife < 20}"
                    :style="{width: playerLife + '%'}"></div>
                </div>
                <div>{{ playerLife }}%</div>
            </div>
            <div class="score">
                <h1>Monstro</h1>
                <div class="life-bar">
                    <div class="life"
                    :class="{danger: monsterLife < 20}"
                    :style="{width: monsterLife + '%'}"></div>
                </div>
                <div>{{ monsterLife }}%</div>
            </div>
        </div>

</template>

<script>
export default {
  props: ['playerLife', 'monsterLife'], 
  methods: {
    sendData() {
      this.$emit('healthBar', {
        playerLife: this.playerLife -30 ,
        monsterLife: this.monsterLife
      });
    }
  }
};
</script>

<style>
.scores {
    display: flex;
}

.score {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.score h1 {
    font-weight: 300;
    font-size: 1.6rem;
}

.life-bar {
    width: 80%;
    height: 20px;
    border: 1px solid #AAA;
}

.life-bar .life {
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: green;
}

.life-bar .life.danger {
    background-color: red;
}
</style>