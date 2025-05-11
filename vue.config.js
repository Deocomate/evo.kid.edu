const { defineConfig } = require('@vue/cli-service')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].filename = 'demo.html'; // Change this to your desired filename
      return args;
    });
  }
})
