<template>
  <main>

    <noscript inline-template><div id="noscript"><div><span>Um mit dieser Seite interagieren zu können benötigen Sie JavaScript. Richten Sie eine Ausnahme für NoScript ein oder laden Sie sich einen aktuellen Browser runter, mit dem Sie moderne Webinhalte genießen können. Zum Beispiel </span><a style="color: #FF6347" href="https://www.google.com/intl/de_de/chrome">Google Chrome</a></div></div>
    </noscript>

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="showPreloader" style="background-image: url(loader.svg)" id="preloader"></div>
    </transition>

    <div class="w-100 h-100" id="particles"></div>

    <div class="swiper-container swiper-container-menu">
      <div class="swiper-wrapper">
        <div class="swiper-slide menu relative">

          <div class="flex flex-row">
            <div class="w-4/12 p-4">
              <img class="rounded-full" src="front_face.jpg" alt="Persönliches Bild">
            </div>
            <div class="flex flex-grow items-center w-8/12">
              <div class="flex flex-col flex-grow">
                <h1 class="font-sans text-3xl font-light leading-none">Portfolio</h1>
                <h2 class="font-sans text-xl font-normal leading-none gray-text">Niklas Lübcke</h2>
              </div>
            </div>
          </div>

          <hr class="devider">

          <div
            @click="verticalSwiper.slideTo(0); toggleMenuResponsive()"
            class="menu-item px-4"
            :class="verticalSwiperIndex === 0 ? 'text-tomato' : ''"
          >Über mich</div>
          <div
            @click="verticalSwiper.slideTo(1); toggleMenuResponsive()"
            class="menu-item px-4"
            :class="verticalSwiperIndex === 1 ? 'text-tomato' : ''"
          >Laufbahn</div>
          <div
            @click="showSubmenuOne = !showSubmenuOne"
            class="menu-item px-4 flex justify-between items-center"
            :class="verticalSwiperIndex === 2 ? 'text-tomato' : ''"
          >
            Skillset
            <i class="material-icons transition" :class="showSubmenuOne ? 'rotate-180' : ''">expand_more</i>
          </div>
          <transition name="slide">
            <div v-if="showSubmenuOne" class="sub-menu">
              <div
                @click="verticalSwiper.slideTo(2); horizontalSwiper.slideTo(0); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="verticalSwiperIndex === 2 && horizontalSwiperIndex === 0 ? 'text-tomato' : ''"
              >Skill 1</div>
              <div
                @click="verticalSwiper.slideTo(2); horizontalSwiper.slideTo(1); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="verticalSwiperIndex === 2 && horizontalSwiperIndex === 1 ? 'text-tomato' : ''"
              >Skill 2</div>
              <div
                @click="verticalSwiper.slideTo(2); horizontalSwiper.slideTo(2); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="verticalSwiperIndex === 2 && horizontalSwiperIndex === 2 ? 'text-tomato' : ''"
              >Skill 3</div>
              <div
                @click="verticalSwiper.slideTo(2); horizontalSwiper.slideTo(3); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="verticalSwiperIndex === 2 && horizontalSwiperIndex === 3 ? 'text-tomato' : ''"
              >Skill 4</div>
              <div
                @click="verticalSwiper.slideTo(2); horizontalSwiper.slideTo(4); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="verticalSwiperIndex === 2 && horizontalSwiperIndex === 4 ? 'text-tomato' : ''"
              >Skill 5</div>

              <hr class="devider">
            </div>
          </transition>

          <div
            @click="verticalSwiper.slideTo(3); toggleMenuResponsive()"
            class="menu-item px-4"
            :class="verticalSwiperIndex === 3 ? 'text-tomato' : ''"
          >Projekte</div>

          <a class="icon absolute bottom-0 slim-menu-item px-4" href="https://github.com/Anything-Code" target="_blank">
            <font-awesome-icon  :icon="['fab', 'github']" style="font-size: 24px" />
          </a>
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
              <section class="swiper-slide">Laufbahn</section>
              <section class="swiper-slide">

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
              <section class="swiper-slide">Projekte</section>
            </div>

            <div class="swiper-scrollbar swiper-scrollbar-v"></div>
          </div>

        </div>
      </div>
    </div>

    <aside v-if="socketConnectionSuccessful" class="chat-panel" :class="chatClosed ? 'closed' : ''">
      <div @click="chatClosed = !chatClosed" class="persons" :class="chatClosed ? 'inverted' : 'light'">
        <b v-if="Object.keys(clients).length > 1">{{ Object.keys(clients).length }}</b>
        <span v-if="Object.keys(clients).length === 0"> Niemand schaut sich aktuell diese Seite an</span>
        <span v-else-if="Object.keys(clients).length > 1"> Personen schauen sich aktuell diese Seite an</span>
        <span v-else="Object.keys(clients).length > 1"> Nur Sie schauen sich aktuell diese Seite an</span>
      </div>
      <div class="new-messages-alert" v-if="newMessagesCounter > 0 && chatClosed">
        <span>{{ `${newMessagesCounter > 1 ? newMessagesCounter : 'Eine'}` }}</span><span>{{ ` neue Nachricht${newMessagesCounter > 1 ? 'en' : ''}!` }}</span>
      </div>
      <ul ref="messages" class="messages">
        <li v-for="(message, key) in messages" :key="key" class="message">
          <i class="timestamp" :title="message.date">
            <span>{{ formatDateToTime(message.date) }}</span>
            <span v-if="message.userName === userName" class="not-italic" style="color: #00BCD4">{{ message.userName }}</span>
            <span v-else="message.userName === userName" class="not-italic" style="color: #FF5252">{{ message.userName }}</span>
          </i>: {{ message.text }}
        </li>
      </ul>
      <input v-model="message" class="inputMessage" type="text" :placeholder="`Als ${userName} schreiben...`" @keyup.enter="sendMessage">
    </aside>

  </main>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
import io from 'socket.io-client'

export default {
  head: {
    title: 'Portfolio | Niklas Lübcke',
    description: 'Servus, dies ist mein persönlicher Web-Auftritt auf dem ich über mich selbst und meine Kompetenzen imformiere. :)'
  },
  asyncData (context) {
    return axios.get(`${process.env.WEBSOCKET_SERVER_URL}/api/messages`).then(response => {
      return {
        messages: response.data,
        websocketServerUrl: process.env.WEBSOCKET_SERVER_URL
      }
    })
  },
  data: (context) => ({
    showPreloader: true,

    socket: null,
    socketConnectionSuccessful: true,
    message: '',
    newMessagesCounter: 0,
    clients: new Object,
    clientID: null,
    chatClosed: true,

    menuIsOpen: false,
    showSubmenuOne: true,
    menuSwiper: null,
    verticalSwiper: null,
    horizontalSwiper: null,

    verticalSwiperIndex: 0,
    horizontalSwiperIndex: 0
  }),
  beforeMount () {
    this.socket = io(this.websocketServerUrl)

    this.socket.on('connect', () => {
      this.showPreloader = false
      this.clientID = this.socket.id
    });

    this.socket.on('connect_error', () => {
      this.socketConnectionSuccessful = false
      this.showPreloader = false
    });

    this.socket.on('clients-changed', clients => this.clients = clients)

    this.socket.on('new-message', message => {
      this.messages.push(message)
      if (this.chatClosed) this.newMessagesCounter++
    })
  },
  mounted () {
    this.$particles()
    this.$typewriter()

    this.scrollToBottom()
    window.addEventListener('resize', () => {
      this.scrollToBottom()
    })

    this.verticalSwiper = new Swiper('.swiper-container-v', {
      initialSlide: JSON.parse(localStorage.getItem('verticalSwiperIndex')) !== null ? JSON.parse(localStorage.getItem('verticalSwiperIndex')) : 0,
      direction: 'vertical',
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
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
      }
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
  },
  computed: {
    userName () {
      return this.clients[this.clientID]
    }
  },
  watch: {
    messages: 'scrollToBottom',
    chatClosed (chatClosed) {
      if (!chatClosed) this.newMessagesCounter = 0
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
    formatDateToTime (date) {
      if (process.browser) {
        return new Date().toLocaleDateString() === new Date(date).toLocaleDateString() ?
          new Date(date).toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
          }) :
          new Date(date).toLocaleTimeString(navigator.language, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          })
      } else return date
    },
    sendMessage () {
      if (!this.message.trim()) return
      const message = this.message.trim()
      this.socket.emit('new-message', {
        userName: this.userName,
        text: message
      })
      this.message = ''
    },
    scrollToBottom () {
      this.$nextTick(() => {
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
      })
    },
    toggleMenu () {
      this.menuIsOpen ? this.menuSwiper.slideNext() : this.menuSwiper.slidePrev()
    },
    toggleMenuResponsive () {
      if (this.menuIsOpen) {
         if (window.innerWidth <= 1200) {
          this.menuSwiper.slideNext()
        }
      }
    }
  }
}
</script>