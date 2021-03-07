import data from '@/fixtures/mock.json'
const collection = {
  namespaced: true,
  state: {
    collection: data,
  },
  mutations: {
    setColection(state, payload) {
      state.collection = payload;
    },
  },
  getters: {
    getCollection(state) {
      return state.collection;
    },
  }
}
export default collection