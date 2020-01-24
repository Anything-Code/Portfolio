export default {
  server: {
    port: 80, // default: 3000
  },
  env: {
    WEBSOCKET_SERVER_URL: 'http://localhost:3000'
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
