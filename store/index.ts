import { storeBuilder } from '@/assets/utils'

const autoStores = storeBuilder()

export const state = () => ({
  ...autoStores.state
})

export const getters = {
  ...autoStores.getters
}

export const mutations = {
  ...autoStores.mutations
}

export const actions = {
  ...autoStores.actions
  // nuxtServerInit({ commit }, { req }) {
  // if (req.session.user) {
  //   commit('user', req.session.user)
  // }
  // }
}
