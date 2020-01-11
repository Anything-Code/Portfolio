<template>
  <main>
    <div class="w-100 h-100" id="particles"></div>
    
    <div class="swiper-container swiper-container-menu">
      <div class="swiper-wrapper">
        <div class="swiper-slide menu">
          <div class="py-1">
            <div @click="verticalSwiper.slideTo(0)" class="menu-item px-4" :class="verticalSwiperIndex === 0 ? 'text-tomato' : ''">Vertical Slide 1</div>
            <div @click="showSubmenuOne = !showSubmenuOne" class="menu-item px-4 flex justify-between items-center" :class="verticalSwiperIndex === 1 ? 'text-tomato' : ''">Vertical Slide 2<i class="material-icons transition" :class="showSubmenuOne ? 'rotate-180' : ''">expand_more</i></div>
            <transition name="slide">
              <div v-if="showSubmenuOne" class="sub-menu">
                <div @click="verticalSwiper.slideTo(1); horizontalSwiper.slideTo(0)" class="menu-item px-4" :class="verticalSwiperIndex === 1 && horizontalSwiperIndex === 0 ? 'text-tomato' : ''">Horizontal Slide 1</div>
                <div @click="verticalSwiper.slideTo(1); horizontalSwiper.slideTo(1)" class="menu-item px-4" :class="verticalSwiperIndex === 1 && horizontalSwiperIndex === 1 ? 'text-tomato' : ''">Horizontal Slide 2</div>
                <div @click="verticalSwiper.slideTo(1); horizontalSwiper.slideTo(2)" class="menu-item px-4" :class="verticalSwiperIndex === 1 && horizontalSwiperIndex === 2 ? 'text-tomato' : ''">Horizontal Slide 3</div>
                <div @click="verticalSwiper.slideTo(1); horizontalSwiper.slideTo(3)" class="menu-item px-4" :class="verticalSwiperIndex === 1 && horizontalSwiperIndex === 3 ? 'text-tomato' : ''">Horizontal Slide 4</div>
                <div @click="verticalSwiper.slideTo(1); horizontalSwiper.slideTo(4)" class="menu-item px-4" :class="verticalSwiperIndex === 1 && horizontalSwiperIndex === 4 ? 'text-tomato' : ''">Horizontal Slide 5</div>
                <hr class="devider">
              </div>
            </transition>
            <div @click="verticalSwiper.slideTo(2)" class="menu-item px-4" :class="verticalSwiperIndex === 2 ? 'text-tomato' : ''">Vertical Slide 3</div>
            <div @click="verticalSwiper.slideTo(3)" class="menu-item px-4" :class="verticalSwiperIndex === 3 ? 'text-tomato' : ''">Vertical Slide 4</div>
          </div>
        </div>
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

      verticalSwiperIndex: 0,
      horizontalSwiperIndex: 0
    }
  },
  mounted () {
    this.verticalSwiper = new Swiper('.swiper-container-v', {
      initialSlide: JSON.parse(localStorage.getItem('verticalSwiperIndex')) !== null ? JSON.parse(localStorage.getItem('verticalSwiperIndex')) : 0,
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
      initialSlide: JSON.parse(localStorage.getItem('horizontalSwiperIndex')) !== null ? JSON.parse(localStorage.getItem('horizontalSwiperIndex')) : 0,
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
      initialSlide: JSON.parse(localStorage.getItem('menuIsOpen')) === true ? 0 : 1,
      resistanceRatio: 0,
      on: {
        slideChangeTransitionStart () {
          this.activeIndex === 0 ? that.menuIsOpen = true : that.menuIsOpen = false
        }
      }
    })

    if(JSON.parse(localStorage.getItem('showSubmenuOne')) !== null) this.showSubmenuOne = JSON.parse(localStorage.getItem('showSubmenuOne'))
    if(JSON.parse(localStorage.getItem('menuIsOpen')) !== null) this.menuIsOpen = JSON.parse(localStorage.getItem('menuIsOpen'))
  },
  watch: {
    menuIsOpen (newValue) {
      localStorage.setItem('menuIsOpen', JSON.stringify(newValue))
    },
    showSubmenuOne (newValue) {
      localStorage.setItem('showSubmenuOne', JSON.stringify(newValue))
    },
    'verticalSwiper.activeIndex' (newValue) {
      localStorage.setItem('verticalSwiperIndex', JSON.stringify(newValue))
      this.verticalSwiperIndex = newValue
    },
    'horizontalSwiper.activeIndex' (newValue) {
      localStorage.setItem('horizontalSwiperIndex', JSON.stringify(newValue))
      this.horizontalSwiperIndex = newValue
    }
  },
  methods: {
    toggleMenu () {
      this.menuIsOpen ? this.menuSwiper.slideNext() : this.menuSwiper.slidePrev()
    }
  }
}
</script>
