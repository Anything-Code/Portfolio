export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  modules: [
    '~/modules/socket.io.js',
    'nuxt-material-design-icons'
  ],
  css: ['~assets/scss/app.scss'],
  plugins: ['~/plugins/app.client.js'],
  env: {
    WS_URL: process.env.WS_URL || 'http://localhost:65080'
  }
}
