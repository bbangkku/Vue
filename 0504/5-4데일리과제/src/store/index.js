import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:0
  },
  getters: {
    counterDouble(state){
      // console.log('getter왔음')
      return state.counter*2
    }
  },
  mutations: {
    INCREASE(state){
      state.counter++
    },
    DECREASE(state){
      // console.log('mutation에decrease옴')
      state.counter--
    },

  },
  actions: {
    increase(context){
      // console.log('increase오고')
      context.commit('INCREASE')
    },
    decrease(context){
      // console.log('decrease오고')
      context.commit('DECREASE')
    }
  },
  modules: {
  }
})
