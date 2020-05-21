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
          <div class="typewriter-container font-semibold leading-tight break-all mr-4">
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
        <section class="swiper-slide">Projekte</section>
        
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