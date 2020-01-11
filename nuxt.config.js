export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: ['~assets/scss/app.scss'],
  plugins: ['~/plugins/app.client.js'],
  modules: ['nuxt-material-design-icons']
}
