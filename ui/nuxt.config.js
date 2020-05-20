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
    'nuxt-material-design-icons',
    ['nuxt-fontawesome', {
      imports: [
       {
         set: '@fortawesome/free-solid-svg-icons',
         icons: ['fas']
       },
       {
         set:'@fortawesome/free-brands-svg-icons',
         icons: ['fab']
       }
     ]
    }]
  ],
  css: ['~assets/scss/app.scss'],
  plugins: [
    '~/plugins/particles.client.js',
    '~/plugins/typewriter.client.js'
  ],
  pwa: {
    manifest: {
      name: 'Niklas Lübcke Portfolio',
      short_name: 'Niklas Lübcke Portfolio',
      lang: 'de',
      description: 'Servus, dies ist mein persönlicher Web-Auftritt auf dem ich über mich selbst und meine Kompetenzen imformiere. :)'
    }
  }
}
