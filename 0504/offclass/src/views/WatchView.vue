<template>
  <div>
    <h2>
      Watch View!
    </h2>
    <p >카운터 : {{ counter }}</p>
    <br>
    <button @click="plus()">+</button>
    <button @click="minus()">-</button>
    <br>
    <br>
    베스트 : {{ best }}
    <br>
    <br>
    워스트 : {{ worst }}
  </div>
</template>

<script>
export default {
  name:'WatchView',
  data(){
    return {
      counter:0,
      best:0,
      worst:0,
    }
  },
  methods:{
    plus(){
      this.counter++
      // if (this.counter > this.best){
      //   this.best = this.counter
      // }
    },
    minus(){
      this.counter--
      // if (this.counter < this.worst){
      //   this.worst = this.counter
      // }
    },
  },
  watch:{
  // counter 변수가 변경될 때마다 자동으로 함수가 호출
    counter(newValue, oldValue){
      console.log(`${oldValue} -> ${newValue}`)
      if (this.counter > this.best){
        console.log('최대값 갱신')
        this.best = this.counter
      }
      if (this.counter < this.worst){
        console.log('최소값 갱신')
        this.worst = this.counter
      }
    }
  }
}


</script>

<style>

</style>