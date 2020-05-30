import Typewriter from 'typewriter-effect/dist/core';

export default ({ app }, inject) => {
  inject('typewriter', () => {
    if (document.querySelector('#welcome'))
    new Typewriter('#welcome', {
      cursor: '',
      delay: 30
    }).typeString('Servus, ich bin Niklas Lübcke, 23 Jahre alt und komme aus Heidelberg.') 
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
        .typeString('Ich studiere Wirtschaftsinformatik und bin seit 2018 selbständig als Softwareentwickler tätig.')
        .pauseFor(200)
        .callFunction(() => {
          document.querySelector('.second-line .Typewriter__cursor').style.display = 'none'
          document.querySelector('.third-line').style.display = 'block'
  
          new Typewriter('#third', {
            cursor: '',
            delay: 30
          })
          .pauseFor(2000)
          .callFunction(() => {
            document.querySelector('#third').classList.remove('ml-3')
          })
          .typeString('Diese Seite dient als Portfolio, auf dem ich über einige meiner bisherigen Projekte und deren Umsetzung informieren möchte.')
          .start()
        })
        .start()
      })
      .start()
  })
}