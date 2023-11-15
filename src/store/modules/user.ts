type State = typeof state
const state = {
  token: '',
  isLogged: false,
}
const mutations = {
  setToken(state: State, token: string) {
    state.token = token
    state.isLogged = true
  },
  removeToken(state: State) {
    state.token = ''
    state.isLogged = false
  },
}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
