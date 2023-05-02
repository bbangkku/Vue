<template>
  <div>
    <h1>Home View</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    TodoList,
  }
}
</script>

// scoped 영역, >>> 이게 우선순위인듯 ?
<style scoped>
h1 {
  color: blue;
}

/* >>> : 딥 셀렉터 - 부모 컴포넌트에서 자식 컴포넌트의 css로 접근 */ 

>>> .h1-child{
  color: green;
}


/deep/ .h1-child {
  color: violet;
}

/* 이거를 권장 */
::v-deep(.h1-child){
  color: yellowgreen;
}




</style>
// global 영역에 설정
<style>
h1 {
  color: red;
}
</style>