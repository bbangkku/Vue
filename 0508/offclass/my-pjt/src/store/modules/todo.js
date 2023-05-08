// 모듈을 default 로 export 하겠다.
export default {
  state: {
    todoList: [
            // 개별 todo Object
      {
        id: 1638771553377,                // nowDateObj.getTime()
        content: 'Vue',                   // Todo 내용
        dueDateTime: '2021-12-09T00:00',  // 마감일
        isCompleted: false,               // 완료된 할 일
        isImportant: true,                        // 중요 할 일
      },
      {
        id: 1638771553378,
        content: 'Vue Router',
        dueDateTime: '2021-12-10T00:00',
        isCompleted: false,
        isImportant: true,
      },
      {
        id: 16387715533779,
        content: 'Vuex',
        dueDateTime: '2021-12-11T00:00',
        isCompleted: true,
        isImportant: false,
      },
    ],
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todoList.push(todoItem)
    },
    LOAD_FROM_LOCALSTORAGE(state) {
      // 로컬 스토리지로 부터 데이터를 받아와
      // state 에 저장
      const localStorageTodos = localStorage.getItem('todoList')
      if (localStorage.getItem('todoList')) {
        // 문자열 -> 객체형태로 변환해서 저장
        state.todoList = JSON.parse(localStorageTodos)
      }
    }
  },
  actions: {
    createTodo(context, todoTitle){
      console.log('context = ', context)
      const lastItem = context.state.todoList[context.state.todoList.length - 1]
      const newId = lastItem.id + 1
      // store 에 저장 전 동기적인 로직

      // "년-월-일T시:분" 형태
      const today = new Date()
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      // 마감일은 현재로부터 10일 후
      const day = ('0' + (today.getDate() + 10)).slice(-2);

      const dateString = year + '-' + month  + '-' + day;

      const hours = ('0' + today.getHours()).slice(-2); 
      const minutes = ('0' + today.getMinutes()).slice(-2);

      const timeString = hours + ':' + minutes;

      const dueDate = dateString + 'T' + timeString

      const todoItem = {
        id: newId,
        content: todoTitle,
        isCompleted: false,               // 완료된 할 일
        isImportant: false,                        // 중요 할 일
        dueDateTime: dueDate
      }

      context.commit('CREATE_TODO', todoItem)
      context.dispatch('saveTodoListToLocalStorage')
    },
    saveTodoListToLocalStorage(context) {
      // 로컬 스토리지는 문자열 밖에 인식 못함
      // JSON.stringify => 문자열로 변환
      const jsonTodos = JSON.stringify(context.state.todoList)
      // 로컬 스토리지에 저장
      localStorage.setItem('todoList', jsonTodos)
    },
    loadFromLocalstorage(context) {
      context.commit('LOAD_FROM_LOCALSTORAGE')
    }
  }
}