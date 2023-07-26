<template>
  <div v-if="playerLife <= 0 || monsterLife <= 0" class="panel result">
    <div v-if="monsterLife <= 0" class="win">
			<p>Você Ganhou !!! :)</p>
				<img src="https://pa1.aminoapps.com/6661/a890882943caf30333aca0fae80207831eaaa8d7_hq.gif">
		</div>
		<div v-else class="lose">
			<p>Você Perdeu! :(</p>
        <img src="https://media.tenor.com/X8pkKnPmo58AAAAC/goku-sad.gif">
    </div>
    <btnNovoJogo @gameClicadoNeto="eventoGameFilho" />
  </div>
</template>

<script>
import btnNovoJogo from './gameButtons/btnNovoJogo.vue'

export default {
  components: {
      btnNovoJogo
  },
  props: ['playerLife', 'monsterLife'], 
  methods: {
    eventoGameFilho() {
      this.$emit('eventoGamePai');
    },
	}
}
</script>

<style>
.result{
   text-align: center;
   font-size: 20px !important;
}
.result .win {
   color: green;
}

.result .lose {
   color: red;
}
</style>