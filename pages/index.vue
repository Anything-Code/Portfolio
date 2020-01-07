<template>
  <main>
    <div class="w-100 h-100" id="particles"></div>
    
    <div class="swiper-container swiper-container-menu">
      <div class="swiper-wrapper">
        <div class="swiper-slide menu">Menu slide</div>
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
      swiperMenu: null,
      menuIsOpen: false
    }
  },
  mounted() {
    const SwiperV = new Swiper('.swiper-container-v', {
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
          SwiperV.slidePrev()
        }
        else if (event.deltaY > 0)
        {
          SwiperV.slideNext()
        }
        
        setTimeout(() => scrolling = false);
      }
    })

    const SwiperH = new Swiper('.swiper-container-h', {
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

    let that = this
    this.swiperMenu = new Swiper('.swiper-container-menu', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      on: {
        slideChangeTransitionStart () {
          this.activeIndex === 0 ? that.menuIsOpen = true : that.menuIsOpen = false
        },
        slideChangeTransitionEnd () {
          this.activeIndex === 0 ? that.menuIsOpen = true : that.menuIsOpen = false
        }
      }
    })
  },
  methods: {
    toggleMenu () {
      this.menuIsOpen ? this.swiperMenu.slideNext() : this.swiperMenu.slidePrev()
    }
  }
}
</script>
