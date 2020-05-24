<template>
  <main>

    <noscript inline-template><div id="noscript"><div><span>Um mit dieser Seite interagieren zu können benötigen Sie JavaScript. Richten Sie eine Ausnahme für NoScript ein oder laden Sie sich einen aktuellen Browser runter, mit dem Sie moderne Webinhalte genießen können. Zum Beispiel </span><a style="color: #FF6347" href="https://www.google.com/intl/de_de/chrome">Google Chrome</a></div></div>
    </noscript>

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="showPreloader" style="background-image: url(img/loader.svg)" id="preloader"></div>
    </transition>

    <div class="w-100 h-100" id="particles"></div>

    <div class="swiper-container swiper-container-menu">
      <div class="swiper-wrapper">
        <div class="swiper-slide menu relative">

          <div class="flex flex-row">
            <div class="w-4/12 p-4">
              <img class="rounded-full" src="img/face_blured.jpg" alt="Persönliches Bild">
            </div>
            <div class="flex flex-grow items-center w-8/12">
              <div class="flex flex-col flex-grow">
                <h1 class="font-sans text-xl font-light leading-none">Portfolio</h1>
                <h2 class="font-sans text-lg font-normal leading-none gray-text">Niklas Lübcke</h2>
              </div>
            </div>
          </div>

          <hr class="devider">

          <div
            @click="$swiper.vertical.slideTo(0); toggleMenuResponsive()"
            class="menu-item px-4"
            :class="$store.state.verticalSwiperIndex === 0 ? 'text-tomato' : ''"
          >Über mich</div>

          <div
            @click="$swiper.vertical.slideTo(1); toggleMenuResponsive()"
            class="menu-item px-4"
            :class="$store.state.verticalSwiperIndex === 1 ? 'text-tomato' : ''"
          >Projekte</div>

          <!-- <div
            @click="$swiper.vertical.slideTo(1); toggleMenuResponsive()"
            class="menu-item px-4"
            :class="$store.state.verticalSwiperIndex === 1 ? 'text-tomato' : ''"
          >Laufbahn</div>
          <div
            @click="showSubmenuOne = !showSubmenuOne"
            class="menu-item px-4 flex justify-between items-center"
            :class="$store.state.verticalSwiperIndex === 2 ? 'text-tomato' : ''"
          >
            Skillset
            <i class="material-icons transition" :class="showSubmenuOne ? 'rotate-180' : ''">expand_more</i>
          </div>
          <transition name="slide">
            <div v-if="showSubmenuOne" class="sub-menu">
              <div
                @click="$swiper.vertical.slideTo(2); $swiper.horizontal.slideTo(0); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="$store.state.verticalSwiperIndex === 2 && $store.state.horizontalSwiperIndex === 0 ? 'text-tomato' : ''"
              >Skill 1</div>
              <div
                @click="$swiper.vertical.slideTo(2); $swiper.horizontal.slideTo(1); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="$store.state.verticalSwiperIndex === 2 && $store.state.horizontalSwiperIndex === 1 ? 'text-tomato' : ''"
              >Skill 2</div>
              <div
                @click="$swiper.vertical.slideTo(2); $swiper.horizontal.slideTo(2); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="$store.state.verticalSwiperIndex === 2 && $store.state.horizontalSwiperIndex === 2 ? 'text-tomato' : ''"
              >Skill 3</div>
              <div
                @click="$swiper.vertical.slideTo(2); $swiper.horizontal.slideTo(3); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="$store.state.verticalSwiperIndex === 2 && $store.state.horizontalSwiperIndex === 3 ? 'text-tomato' : ''"
              >Skill 4</div>
              <div
                @click="$swiper.vertical.slideTo(2); $swiper.horizontal.slideTo(4); toggleMenuResponsive()"
                class="menu-item px-4"
                :class="$store.state.verticalSwiperIndex === 2 && $store.state.horizontalSwiperIndex === 4 ? 'text-tomato' : ''"
              >Skill 5</div>

              <hr class="devider">
            </div>
          </transition> -->

          <div class="absolute bottom-sometimes-0 slim-menu-item">
            <a class="icon pl-4" href="https://github.com/Anything-Code" target="_blank">
              <font-awesome-icon  :icon="['fab', 'github']" />
            </a>
            <a class="icon pl-4" href="https://stackoverflow.com/users/12978882/anything-code" target="_blank">
              <font-awesome-icon  :icon="['fab', 'stack-overflow']" />
            </a>
          </div>
        </div>

        <nuxt/>

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
import io from 'socket.io-client'
import { mapGetters } from 'vuex'

export default {
  data: (context) => ({
    showPreloader: true,

    socket: null,
    socketConnectionSuccessful: true,
    message: '',
    newMessagesCounter: 0,
    clients: new Object,
    clientID: null,
    chatClosed: true,

    showSubmenuOne: true
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
    this.$swiper()
    this.$particles()

    this.scrollToBottom()
    window.addEventListener('resize', () => {
      this.scrollToBottom()
    })
  },
  computed: {
    ...mapGetters(['menuIsOpen', 'messages', 'websocketServerUrl']),
    userName () {
      return this.clients[this.clientID]
    }
  },
  watch: {
    messages: 'scrollToBottom',
    chatClosed (chatClosed) {
      if (!chatClosed) this.newMessagesCounter = 0
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
    toggleMenuResponsive () {
      if (window.innerWidth <= 1200) {
        this.$swiper.menu.slideTo(1)
      }
    }
  }
}
</script>