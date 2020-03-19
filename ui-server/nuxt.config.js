export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-161183935-1',
      // debug: {
      //   enabled: true,
      //   sendHitTask: true
      // }
    }]
  ],
  modules: [
    '@nuxtjs/pwa',
    'nuxt-material-design-icons'
  ],
  css: ['~assets/scss/app.scss'],
  plugins: ['~/plugins/particles.client.js'],
  pwa: {
    manifest: {
      name: 'Niklas Lübcke Portfolio',
      short_name: 'Niklas Lübcke Portfolio',
      lang: 'de',
      description: 'Servus, dies ist mein persönlicher Web-Auftritt auf dem ich versuche über mich selbst und meine Kompetenzen zu informieren. :)'
    }
  }
}
