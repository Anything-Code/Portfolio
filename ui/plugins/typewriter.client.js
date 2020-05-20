import Typewriter from 'typewriter-effect/dist/core';

export default ({ app }, inject) => {
  inject('typewriter', () => {
    if (document.querySelector('#welcome'))
    new Typewriter('#welcome', {
      cursor: '',
      delay: 30
    }).typeString('Herzlich Wilkommen auf meinem Portfolio!')
      .pauseFor(200)
      .callFunction(() => {
        document.querySelector('.first-line .Typewriter__cursor').style.display = 'none'
        document.querySelector('.second-line').style.display = 'block'

        new Typewriter('#second', {
          cursor: '',
          delay: 30
        })
        .pauseFor(2000)
        .callFunction(() => {
          document.querySelector('#second').classList.remove('ml-3')
        })
        .typeString('Dies ist mein persönlicher Web-Auftritt auf dem ich über mich selbst und meine Kompetenzen imformiere :)')
        .pauseFor(200)
        .callFunction(() => {
          document.querySelector('.second-line .Typewriter__cursor').style.display = 'none'
          document.querySelector('.third-line').style.display = 'block'
  
          new Typewriter('#third', {
            cursor: '',
            delay: 30
          })
        })
        .start()
      })
      .start()
      // .pauseFor(4000)
      // .deleteAll(1)
      // .typeString('Hier finden Sie die innovativsten Produkte zum Thema Digitalisierung, bereitgestellt durch die besten KMUs auf diesem Gebiet in Heidelberg.')
      // .pauseFor(4000)
      // .deleteAll(.00001)
      // .typeString('Außerdem können Sie sich für einen Ausstellungsplatz bewerben und in unserem FAQ interessante Fragen stellen, die wir ihnen gerne beantworten!')
      // .pauseFor(4000)
      // .deleteAll(.00001)
  })
}