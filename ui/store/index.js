import axios from 'axios'

export const state = () => ({
  websocketServerUrl: process.env.WEBSOCKET_SERVER_URL,

  messages: [],
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
  },
  addMessage (state, value) {
    state.messages.push(value)
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    let { data } = await axios.get(`${process.env.WEBSOCKET_SERVER_URL}/api/messages`)
    commit('setMessages', data)
  }
}

export const getters = {
  menuIsOpen (state) {
    return state.menuIsOpen
  },
  messages (state) {
    return state.messages
  },
  websocketServerUrl (state) {
    return state.websocketServerUrl
  }
}