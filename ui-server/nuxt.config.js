export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    noscript: [{ innerHTML: `<div id="noscript"><div><span>Um den Content dieser Seite ansehen zu können benötigen Sie Javascript. Richten Sie eine Ausnahme für NoScript ein oder laden Sie sich einen aktuellen Browser runter, mit dem Sie moderne Webinhalte genießen können. Zum Beispiel</span><a style="color: #FF6347" href="https://www.google.com/intl/de_de/chrome">Google Chrome</a></div></div>` }],
  },
  modules: ['nuxt-material-design-icons'],
  css: ['~assets/scss/app.scss'],
  plugins: ['~/plugins/particles.client.js']
}
