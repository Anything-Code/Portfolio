<template>
  <div class="swiper-slide content">
    <div class="menu-button-wrapper">
      <div @click="toggleMenu()" class="menu-button" :class="menuIsOpen ? 'cross' : ''">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>

    <div class="swiper-container swiper-container-v">
      <div class="swiper-wrapper">
        <section class="swiper-slide flex text-left about">
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
        <section class="swiper-slide projects ml-60px">
          <div class="container mx-auto lg:pl-4 pr-4">
            <h1 class="text-4xl mb-4 leading-none">Projekte</h1>

            <h2 class="text-lg mb-4 leading-tight">Hier biete ich einen Einblick in einige meiner Projekte, die ich seit meiner Nutzungszeit von Git anhäufen konnte. Es sind über die Jahre hinweg leider alle meiner Projekte, die ich vor meiner Nutzung von Git umgesetzt habe, verloren gegenagen. Diesbezüglich glaube ich, dass ich durch die Nutzung von Git den größten Schritt in meinem Developement-Workflow machen konnte.</h2>

            <div class="skills mb-4">
              <div @click="selection = []" class="skill" :class="selection.length === 0 ? 'selected' : ''">Alles</div>
              <div
                @click="selection.includes(skill) ? selection.splice(selection.findIndex(element => element === skill), 1) : selection.push(skill)"
                class="skill"
                :class="selection.includes(skill) ? 'selected' : ''"
                v-for="skill in skills"
              >
                {{ skill }}
              </div>
            </div>

            <div class="projects">
              <div class="project"></div>
            </div>
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
    title: 'Portfolio | Niklas Lübcke',
    description: 'Servus, dies ist mein persönlicher Web-Auftritt auf dem ich über mich selbst und meine Kompetenzen imformiere. :)'
  },
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

        ],
        tag: 'live',
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

        ],
        tag: 'live',
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

        ],
        tag: 'public',
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

        ],
        tag: 'private',
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
          
        ],
        tag: 'public',
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
    }
  }
}
</script>