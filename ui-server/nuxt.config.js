export default {
  env: {
    WEBSOCKET_SERVER_URL: 'https://34.68.136.217:3000'
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  modules: ['nuxt-material-design-icons'],
  css: ['~assets/scss/app.scss'],
  plugins: ['~/plugins/particles.client.js']
}
