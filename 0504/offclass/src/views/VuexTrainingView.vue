<template>
  <div>
    <h2>Vuex 연습하기</h2>
    <!-- store 에 저장된 counter 출력 -->
    <!-- $ = 전역적으로 사용된다 -->
    <!-- <p>카운터 : {{ $store.state.counter }}</p> -->
    <p>카운터 : {{ getPlus2 }}</p>
    <div>
      <button @click="plus()">+</button>
      <button @click="minus()">-</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'VuexTrainingView',
  computed:{
    counter(){
      return this.$store.state.counter
    },
    getPlus2(){
      console.log('computed 호출') // 화면전환될때는 얘까지 호출되고 getter까지 안감
      return this.$store.getters.getPlus
    }
  },
  methods:{
  plus(){
    // 직접 접근해서 수정 가능하긴함
    // 근데 이렇게 쓰지는 말자.. store에 액션과 뮤테이션을 만들자
    // this.$store.state.counter ++
    // dispatch : 스토어에 등록된 액션 호출
    this.$store.dispatch('plus') // 'plus' 는 액션의 이름 그대로 적어줘야함,, 복사해서 넣어라 항상
  },
  minus(){
    this.$store.dispatch('minus')
  }
  }
}

</script>

<style>

</style>