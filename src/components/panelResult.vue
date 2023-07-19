<template>
     <div v-if="hasResult" class="panel result">
            <div v-if="monsterLife == 0" class="win">Você Ganhou !!! :)</div>
            <div v-else class="lose">Você Perdeu! :(</div>
        </div>
</template>

<script>
export default {
 props: { 
    hasResult: { type: Boolean }, 
    },
  
  // Definindo as props que serão recebidas do componente pai
  
  methods: {
    sendResult() {

      // Emitindo o evento personalizado com os dados para o componente pai (caso necessário)

      this.$emit('result', {
        hasResult: true,
      });
    }
  }
};

</script>

<style>

</style>