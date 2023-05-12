<template>
  <div>
    <input 
      type="text" 
      v-model="title" 
      @keyup.enter="createTodo"
    >
    <button @click="createTodo">+</button>
  </div>
</template>

<script>
import axios from'axios'

export default {
  name: 'CreateTodo',
  data: function () {
    return {
      title: null,
    }
  },
  methods: {
    createTodo: function () {
      // ...
      const title = this.title
      axios({
        method:'post',
        url:`${TODO_URL}/todos/`,
        data: {title,},
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
    },
  },
}
</script>