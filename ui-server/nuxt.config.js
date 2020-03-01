export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },
  modules: [
    '@nuxtjs/pwa',
    'nuxt-material-design-icons'
  ],
  css: ['~assets/scss/app.scss'],
  plugins: ['~/plugins/particles.client.js']
}
