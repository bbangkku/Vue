// import { cosh } from 'core-js/core/number'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  // store 의 computed 역할
  // state 의 값을 변경하지 않으면서 원하는 값을 반환하고 싶을 때
  getters: {
    getPlus(state){
      // 가능은 하다..!
      console.log('getters호출!')
      state.counter += 10
      return state.counter
    }
  },
  mutations: {
    // 이름은 대문자로, 스네이크 케이스로 구현을 권장 PLUS_EWQEQE
    // mutation 의 파라미터 : state, data
    // state: stored에 저장된 전체 데이터
    // data: commit 하는 쪽에서 전달해주는 데이터
    PLUS(state){
      state.counter++
    },
    MINUS(state){
      state.counter--
    }
    
  },
  actions: {
    // action 의 파라미터: context, data
    // context: store의 모든 속성을 가진 변수
    // data: 컴포넌트가 전달해주는 데이터
    plus(context){
      console.log('context = ', context)
      // 직접 접근도가능하다..
      // 근데 이렇게 구현하지마..
      // context.state.counter++
      context.commit('PLUS')
    },
    minus(context){
      context.commit('MINUS')
    }
  },

})
