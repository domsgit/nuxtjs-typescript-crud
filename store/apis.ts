import axios from 'axios'

export const state = () => ({
  oApis: {}
})

export const getters = {
  apis: (state) => state.oApis
}

export const mutations = {
  set(state, newApis) {
    state.oApis = newApis
  }
}

export const actions = {
  get({ commit }) {
    return axios.get(`https://api.github.com`).then(({ data }) => {
      commit('set', data)
      return data
    })
  }
}
