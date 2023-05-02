<template>
  <div>
    <h1 class="h1-child">TodoList</h1>
    {{  message }}
  </div>
</template>

<script>
export default {
  name:'TodoList',
  // component에서 data는 반드시 function으로 사용해야함
  data(){
    return{
      message:'TodoList 임~!'
    }
  }
}
</script>

<style>

</style>