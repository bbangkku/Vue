<template>
  <div>
    <h3>모든 할 일 리스트</h3>
    <div v-for="(todo,index) in todoList" :key="todo.id">
      {{ index+1 }} - {{ todo.content }}
    </div>

    <hr>
    <h3>Todo</h3>
    <input type="text"
    v-model.trim="todoTitle"
    @keyup.enter="createTodo()"> 
    <!-- 입력 받아야하니까 v-model, trim은 양끝공백제거 엔터치면생성-->
  </div>
</template>

<script>
export default {
  name: 'AllTodoList'
  ,computed: {
    todoList(){
      // 순서 헷갈리지 마세요
      // todo 모듈의 state 접근
      // state.todo.todoList
      return this.$store.state.todo.todoList
    }
  },
  data(){
    return {
      todoTitle: '' //비어있는 투두타이틀하나 만들어주고,,
    }
  },
  methods:{
    createTodo(){
      // 비어있지 않다면, store에 저장
      if(this.todoTitle){
        this.$store.dispatch('createTodo',this.todoTitle)
        console.log(this.todoTitle)
      } else{
        alert("todo 를 입력하세요!")
      }
      // this.todoTitle 이 비어있다면, 입력하라는 문구 출력
      this.todoTitle=""
    }
  },
  created(){
    this.$store.dispatch('loadFromLocalstorage')
    // 생성시에 액션호출
  }
}
</script>

<style>

</style>