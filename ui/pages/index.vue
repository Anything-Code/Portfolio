<template>
  <div class="swiper-slide content">
    <div class="menu-button-wrapper">
      <div>
        <div @click="toggleMenu()" class="menu-button" :class="menuIsOpen ? 'cross' : ''">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </div>

    <div class="swiper-container swiper-container-v">
      <div class="swiper-wrapper">
        <section class="swiper-slide about">
          <div class="typewriter-container font-semibold leading-tight break-all">
            <div class="first-line">
              <span><span class="text-green-700">Niklas Lübcke@Portfolio</span>:<span class="text-purple-700">~</span>$</span>
              <span id="welcome"></span>
            </div>
            <div class="second-line">
              <span><span class="text-green-700">Niklas Lübcke@Portfolio</span>:<span class="text-purple-700">~</span>$</span>
              <span class="ml-3" id="second"></span>
            </div>
            <div class="third-line">
              <span><span class="text-green-700">Niklas Lübcke@Portfolio</span>:<span class="text-purple-700">~</span>$</span>
              <span class="ml-3" id="third"></span>
            </div>
          </div>
        </section>

        <section class="swiper-slide projects">
          <div class="xl:max-w-screen-lg xl:mx-auto">
            <h1 class="text-4xl mb-4 leading-none">Projekte</h1>

            <h2 class="text-lg mb-4 leading-tight">Es sind über die Jahre hinweg leider alle meine Projekte, die ich vor meiner Nutzung von Git umgesetzt habe, verloren gegangen. Ich schätze, dass die Nutzung von Git den größten Benefit zu meinem Developement Workflow beigetragen hat. Gegebenenfalls sind einige meiner Skills ausgegraut, da ich noch kein passendes Projekt umgesetzt habe.</h2>

            <div class="skills mb-4">
              <div
                @click="[selection = [], updateSwiper()]"
                :class="selection.length === 0 ? 'selected' : ''"
                class="skill"
              >Alles</div>
              <div
                v-for="skill in skills"
                @click="toggleSkill(skill)"
                :class="[
                  selection.includes(skill) ? 'selected' : '',
                  !skillInUse(skill) ? 'disabled' : ''
                ]"
                class="skill"
              >
                {{ skill }}
              </div>
            </div>

            <div v-if="projectsFound()" class="flex flex-wrap -m-1">
              <div v-if="skillsSelected(project)" class="p-1 w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4" v-for="(project, key) in projects">
                <div class="project shadow rounded bg-white overflow-hidden">
                  <div class="featured relative overflow-hidden">
                    <div :class="project.tag.class" class="tag">{{ project.tag.text }}</div>
                    <div class="overlay">
                      <button
                        class="rounded focus:outline-none focus:shadow-outline"
                        :class="project.class"
                      >Mehr Infos</button>
                    </div>
                    <img :src="project.images[0]" :alt="key + '. Bild zu ' + project.title">
                  </div>
                  <div class="px-4 py-2">
                    {{ project.title }}
                  </div>
                </div>
              </div>
            </div>

            <h3 v-else class="text-base font-bold text-primary">
              Für Ihre Auswahl wurden keine Projekte gefunden!
            </h3>
          </div>
        </section>
        
        <!-- <section class="swiper-slide">

          <div class="swiper-container swiper-container-h">
            <div class="swiper-wrapper">
              <section class="swiper-slide">Skill 1</section>
              <section class="swiper-slide">Skill 2</section>
              <section class="swiper-slide">Skill 3</section>
              <section class="swiper-slide">Skill 4</section>
              <section class="swiper-slide">Skill 5</section>
            </div>

            <nav class="swiper-pagination swiper-pagination-h"></nav>

            <div class="swiper-button-prev swiper-button-prev-h d-none d-block-lg"></div>
            <div class="swiper-button-next swiper-button-next-h d-none d-block-lg"></div>
          </div>

        </section>
        <section class="swiper-slide">Laufbahn</section> -->
      </div>

      <div class="swiper-scrollbar swiper-scrollbar-v"></div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Portfolio',
    description: 'Servus, ich bin Niklas Lübcke, 23 Jahre alt und komme aus Heidelberg. Ich studiere Wirtschaftsinformatik und bin seit 2018 selbständig als Softwareentwickler tätig.'
  },
  layout: 'main',
  data: () => ({
    skills: [
      'C/C++',
      'Java',
      'PHP',
      'TypeScript',
      'JavaScript',
      'Python',
      'R',
      'Shellscript',
      'Linux',
      'Git',
      'Node',
      'Laravel',
      'Nginx',
      'MySQL',
      'Redis',
      'MongoDB',
      'Vue',
      'Nuxt',
      'Sass',
      'Webpack',
      'Docker'
    ],
    selection: [],
    projects: [
      {
        title: 'ARRIBA Sportreisen',
        description: '',
        images: [
          'img/arriba/1.png',
          'img/arriba/2.png'
        ],
        tag: {
          text: 'live',
          class: 'bg-blue-500'
        },
        class: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
        skills: [
          'Git',
          'PHP',
          'MySQL',
          'Laravel',
          'Nginx',
          'JavaScript',
          'Vue',
          'Sass',
          'Webpack',
          'Docker',
          'Linux'
        ]
      },
      {
        title: 'gh-ai',
        description: '',
        images: [
          'img/gh-ai/1.png',
          'img/gh-ai/2.png'
        ],
        tag: {
          text: 'live',
          class: 'bg-blue-500'
        },
        class: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
        skills: [
          'Git',
          'PHP',
          'Nginx',
          'MySQL',
          'JavaScript',
          'Sass',
          'Webpack',
          'Docker'
        ]
      },
      {
        title: 'Transformation Suite Prototype',
        description: '',
        images: [
          'img/transformation-suite/1.png',
          'img/transformation-suite/2.png',
          'img/transformation-suite/3.png'
        ],
        tag: {
          text: 'public',
          class: 'bg-green-500'
        },
        class: 'bg-green-500 hover:bg-green-600 active:bg-green-700',
        skills: [
          'Git',
          'JavaScript',
          'Nuxt',
          'Sass'
        ]
      },
      {
        title: 'Game Trainer & Cheats',
        description: '',
        images: [
          'img/cheats/1.png',
          'img/cheats/2.png',
          'img/cheats/3.jpg',
          'img/cheats/4.png',
          'img/cheats/5.jpg'
        ],
        tag: {
          text: 'private',
          class: 'primary'
        },
        class: 'primary hover:primary active:primary',
        skills: [
          'Git',
          'C/C++',
          'Node',
          'TypeScript',
          'Vue',
          'Sass',
          'Webpack'
        ]
      },
      {
        title: 'Dieses Portfolio',
        description: '',
        images: [
          'img/portfolio/1.png'
        ],
        tag: {
          text: 'public',
          class: 'bg-green-500'
        },
        class: 'bg-green-500 hover:bg-green-600 active:bg-green-700',
        skills: [
          'Git',
          'Nginx',
          'Nuxt',
          'JavaScript',
          'Sass'
        ]
      }
    ]
  }),
  mounted () {
    this.$typewriter()
  },
  computed: {
    ...mapGetters(['menuIsOpen']),
  },
  methods: {
    toggleMenu () {
      this.menuIsOpen ? this.$swiper.menu.slideNext() : this.$swiper.menu.slidePrev()
    },
    skillInUse (skill) {
      let result = false
      this.projects.forEach(element => {
        if (element.skills.includes(skill)) {
          result = true
        }
      })
      return result
    },
    toggleSkill (skill) {
      this.selection.includes(skill) ?
        this.selection.splice(this.selection.findIndex(element => element === skill), 1) :
        this.selection.push(skill)
      this.updateSwiper()
    },
    updateSwiper () {
      setTimeout(() => {
        this.$swiper.vertical.update()
        this.$swiper.vertical.slideTo(1, 0)
      }, 50)
    },
    skillsSelected (project) {
      if (this.selection.length > 0) {
        let result = true
        this.selection.forEach(element => {
          if (!project.skills.includes(element)) {
            result = false 
          }
        })
        return result
      } else {
        return true
      }
    },
    projectsFound () {
      const result = []
      this.projects.forEach(element => {
        if (this.skillsSelected(element)) {
          result.push(element)
        }
      })
      return result.length
    }
  }
}
</script>