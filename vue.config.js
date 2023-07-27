const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/MatadorDeMonstro-VueJS/' // aqui é onde você coloca a subpasta onde o site será hospedado
    : '/',
  transpileDependencies: true,
})
