<template>
  <main>
    <!-- Swiper -->
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
      <!-- Add Pagination -->
      <nav class="swiper-pagination swiper-pagination-v w-0"></nav>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar swiper-scrollbar-v"></div>
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
        
        setTimeout(() => scrolling = false, 300);
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
  }
}
</script>
