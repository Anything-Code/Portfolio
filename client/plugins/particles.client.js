import 'particles.js'

export default ({ app }, inject) => {
  inject('particles', () => {
    if (document.querySelector('#particles'))
    particlesJS('particles', {
      particles: {
        number: {
          value: 20,
          density: {
            enable: false,
            value_area: 800
          }
        },
        color: {
          value: "#000000"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 3
          }
        },
        opacity: {
          value: 0.2,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 3,
          random: false,
          anim: {
            enable: false,
            speed: 80,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 300,
          color: "#000000",
          opacity: 0.1,
          width: 1
        },
        move: {
          enable: true,
          speed: .5,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      retina_detect: true
    })
  })
}