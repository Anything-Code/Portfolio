<template>
  <main>
    <div class="w-100 h-100" id="particles"></div>
    
    <div class="swiper-container swiper-container-menu">
      <div class="swiper-wrapper">
        <div class="swiper-slide menu">
          <div class="py-1">
            <div class="menu-item px-4">Vertical Slide 1</div>
            <div @click="showSubmenuOne = !showSubmenuOne" class="menu-item px-4 flex justify-between items-center">Vertical Slide 2<i class="material-icons transition" :class="showSubmenuOne ? 'rotate-180' : ''">expand_more</i></div>
            <transition name="slide">
              <div v-if="showSubmenuOne" class="sub-menu">
                <div class="menu-item px-4">Horizontal Slide 1</div>
                <div class="menu-item px-4">Horizontal Slide 2</div>
                <div class="menu-item px-4">Horizontal Slide 3</div>
                <div class="menu-item px-4">Horizontal Slide 4</div>
                <div class="menu-item px-4">Horizontal Slide 5</div>
                <hr class="devider">
              </div>
            </transition>
            <div class="menu-item px-4">Vertical Slide 3</div>
            <div class="menu-item px-4">Vertical Slide 4</div>
          </div>
        </div>
        <div class="swiper-slide content">
          <div @click="toggleMenu()" class="menu-button z-index-2" :class="menuIsOpen ? 'cross' : ''">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>

          <div class="swiper-container swiper-container-v">
            <div class="swiper-wrapper">
              <section class="swiper-slide">Vertical Slide 1</section>
              <section class="swiper-slide">

                <div class="swiper-container swiper-container-h">
                  <div class="swiper-wrapper">
                    <section class="swiper-slide">Horizontal Slide 1</section>
                    <section class="swiper-slide">Horizontal Slide 2</section>
                    <section class="swiper-slide">Horizontal Slide 3</section>
                    <section class="swiper-slide">Horizontal Slide 4</section>
                    <section class="swiper-slide">Horizontal Slide 5</section>
                  </div>

                  <nav class="swiper-pagination swiper-pagination-h"></nav>

                  <div class="swiper-button-prev swiper-button-prev-h d-none d-block-lg"></div>
                  <div class="swiper-button-next swiper-button-next-h d-none d-block-lg"></div>
                </div>

              </section>
              <section class="swiper-slide">Vertical Slide 3</section>
              <section class="swiper-slide">Vertical Slide 4</section>
            </div>

            <div class="swiper-scrollbar swiper-scrollbar-v"></div>
          </div>

        </div>
      </div>
    </div>

  </main>
</template>

<script>
import Swiper from 'swiper';

export default {
  head: {
    title: 'Über Niklas Lübcke'
  },
  asyncData (context) {
    return {
      menuIsOpen: false,
      showSubmenuOne: true,
      menuSwiper: null,
      verticalSwiper: null,
      horizontalSwiper: null,
    }
  },
  mounted () {
    this.verticalSwiper = new Swiper('.swiper-container-v', {
      direction: 'vertical',
      keyboard: true,
      pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar-v',
        draggable: true,
      },
    })

    let scrolling = false
    window.addEventListener('wheel', event => {
      if (!scrolling) {
        scrolling = true
        
        if (event.deltaY < 0)
        {
          this.verticalSwiper.slidePrev()
        }
        else if (event.deltaY > 0)
        {
          this.verticalSwiper.slideNext()
        }
        
        setTimeout(() => scrolling = false);
      }
    })

    this.horizontalSwiper = new Swiper('.swiper-container-h', {
      keyboard: true,
      pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
      },
      navigation: {
        prevEl: '.swiper-button-prev-h',
        nextEl: '.swiper-button-next-h'
      },
    })

    const that = this
    this.menuSwiper = new Swiper('.swiper-container-menu', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      on: {
        slideChangeTransitionStart () {
          this.activeIndex === 0 ? that.menuIsOpen = true : that.menuIsOpen = false
        }
      }
    })

    if(JSON.parse(localStorage.getItem('showSubmenuOne')) !== null) this.showSubmenuOne = JSON.parse(localStorage.getItem('showSubmenuOne'))

  },
  watch: {
    showSubmenuOne: newValue => {
      localStorage.setItem('showSubmenuOne', JSON.stringify(newValue))
    },
  },
  methods: {
    toggleMenu () {
      this.menuIsOpen ? this.menuSwiper.slideNext() : this.menuSwiper.slidePrev()
    }
  }
}
</script>
