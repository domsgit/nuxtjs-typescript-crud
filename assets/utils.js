const storeBuilder = () => {
  const state = () => ({
    aa: ['a', 'b', 'c']
  })

  const getters = {
    aas: (state) => state.aa
  }

  const mutations = {
    set(state, newAA) {
      state.aa = newAA
    }
  }

  const actions = {
    get({ commit }) {
      const newAs = ['aaaa', 'bbbb']
      commit('set', newAs)
      return newAs
    }
  }

  return {
    state,
    getters,
    mutations,
    actions
  }
}

export { storeBuilder }
