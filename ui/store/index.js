import axios from 'axios'

export const state = () => ({
  websocketServerUrl: process.env.WEBSOCKET_SERVER_URL,

  messages: new Array,
  menuIsOpen: false,

  verticalSwiperIndex: null,
  horizontalSwiperIndex: null
})

export const mutations = {
  setMenuIsOpen (state, value) {
    state.menuIsOpen = value
  },
  setVerticalSwiperIndex (state, value) {
    state.verticalSwiperIndex = value
  },
  setHorizontalSwiperIndex (state, value) {
    state.horizontalSwiperIndex = value
  },
  setMessages (state, value) {
    state.messages = value
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    axios.get(`${process.env.WEBSOCKET_SERVER_URL}/api/messages`).then(response => {
      commit('setMessages', response.data)
    })
  }
}

export const getters = {
  menuIsOpen: state => {
    return state.menuIsOpen
  },
  messages: state => {
    return state.messages
  },
  websocketServerUrl: state => {
    return state.websocketServerUrl
  }
}