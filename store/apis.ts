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
    return (this as any).$axios
      .get(`https://github.com/topics`)
      .then(({ data }) => {
        commit('set', data)
        return data
      })
  }
}
