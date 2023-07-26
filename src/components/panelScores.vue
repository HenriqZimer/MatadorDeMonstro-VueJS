<template>
    <div class="panel scores">
            <div class="score">
                <div>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bfcca197-3578-4aac-affa-0f78c0bac51c/detnsfd-cb6a28c3-bdcf-46e8-8941-6bb4e94be31d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmY2NhMTk3LTM1NzgtNGFhYy1hZmZhLTBmNzhjMGJhYzUxY1wvZGV0bnNmZC1jYjZhMjhjMy1iZGNmLTQ2ZTgtODk0MS02YmI0ZTk0YmUzMWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XbQ9zX_7vZHlJbe4Hn4zfvDm_sp0QO5Tl_ZfBcAx5NM"
                width="247"
                height="150">
                </div>
                <h1>Goku</h1>
                <div class="life-bar">
                    <div class="life"
                    :class="{danger: playerLife < 20}"
                    :style="{width: playerLife + '%'}"></div>
                </div>
                <div>{{ playerLife }}%</div>
            </div>
            <div class="score">
                <div>
                <img src="https://gifimgs.com/animations/anime/dragon-ball-z/Frieza/frieza_14.gif"
                width="247"
                height="150">
                </div>
                <h1>Freeza</h1>
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
    enviarDados() {
      this.$emit('healthBar', {
        playerLife: this.playerLife,
        monsterLife: this.monsterLife
      });
    }
  }
}
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