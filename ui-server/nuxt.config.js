export default {
  env: {
    WEBSOCKET_SERVER_URL: 'https://35.223.157.224'
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
