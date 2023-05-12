<template>
  <div>
  <h3>비디오 검색</h3>
  <input type="text" v-model="keyword"  @keyup.enter="videoSearch"> <!--엔터치면,,함수실행-->
  <button @click="videoSearch">보기</button> <!--클릭하면,,함수실행-->
  </div>
</template>

<script>
export default {
  name:"SearchView",

  data(){
    return{
      // 뭐 입력할지 세팅해놔야 입력을하지요
      keyword: '',
    }
  },
  methods:{
    // 액션 호출하고,, this.keyword를 인자로 전달해버려
  videoSearch(){
    this.$store.dispatch('getVideos',this.keyword)
    }
  }
  ,

}
  
</script>

<style>

</style>