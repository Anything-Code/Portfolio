import Swiper from 'swiper'

export default ({ app }, inject) => {
  inject('swiper', () => {
    if (document.querySelector('.swiper-container'))
    {
      app.$swiper.vertical = new Swiper('.swiper-container-v', {
        initialSlide: JSON.parse(localStorage.getItem('verticalSwiperIndex')) !== null ? JSON.parse(localStorage.getItem('verticalSwiperIndex')) : 0,
        freeMode: true,
        slidesPerView: 'auto',
        direction: 'vertical',
        scrollbar: {
          el: '.swiper-scrollbar-v',
          draggable: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        on: {
          slideChange () {
            localStorage.setItem('verticalSwiperIndex', JSON.stringify(this.activeIndex))
            app.store.commit('setVerticalSwiperIndex', this.activeIndex)
          },
          init () {
            app.store.commit('setVerticalSwiperIndex', this.activeIndex)
          },
        }
      })
  
      let scrolling = false
      window.addEventListener('wheel', event => {
        if (!scrolling) {
          scrolling = true
          
          if (event.deltaY < 0)
          {
            app.$swiper.vertical.slidePrev()
          }
          else if (event.deltaY > 0)
          {
            app.$swiper.vertical.slideNext()
          }
          
          setTimeout(() => scrolling = false);
        }
      })
  
      // app.$swiper.horizontal = new Swiper('.swiper-container-h', {
      //   initialSlide: JSON.parse(localStorage.getItem('horizontalSwiperIndex')) !== null ? JSON.parse(localStorage.getItem('horizontalSwiperIndex')) : 0,
      //   keyboard: true,
      //   pagination: {
      //     el: '.swiper-pagination-h',
      //     clickable: true,
      //   },
      //   navigation: {
      //     prevEl: '.swiper-button-prev-h',
      //     nextEl: '.swiper-button-next-h'
      //   },
      //   on: {
      //     slideChange () {
      //       localStorage.setItem('horizontalSwiperIndex', JSON.stringify(this.activeIndex))
      //       app.store.commit('setHorizontalSwiperIndex', this.activeIndex)
      //     },
      //     init () {
      //       app.store.commit('setHorizontalSwiperIndex', this.activeIndex)
      //     },
      //   }
      // })
  
      app.$swiper.menu = new Swiper('.swiper-container-menu', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0,
        on: {
          slideChange () {
            this.activeIndex === 0 ? app.store.commit('setMenuIsOpen', true) : app.store.commit('setMenuIsOpen', false)
          }
        }
      })
    }
  })
}