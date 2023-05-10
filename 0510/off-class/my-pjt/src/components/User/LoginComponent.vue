<template>
  <div>
    <div>
        <label for="id">ID</label>
        <input type="text" v-model="form.id">
    </div>
    <div>
        <label for="PW">PASSWORD</label>
        <input type="text" v-model="form.pw">
    </div>
    <button @click="login()">로그인</button>
  </div>
</template>

<script>

export default {
    name:'LoginComponent',
    data(){
        return{
            form:{
                id: '',
                pw: ''
            }
        }
    },
    // 1. id,pw 정상적으로 입력했나? 
    // 2.   
    methods:{
        login(){
            // 최소한의 유효성 검증
            if(this.form.id === ''){
                alert('ID를 입력하세요!')
                return
            }
            if(this.form.pw === ''){
                alert('PASSWORD를 입력하세요!')
                return
            }

            // 모두 정상적인 입력이라면, action dispatch 해줘
            // action -> Promise
            this.$store.dispatch('login',this.form).then(() => {
                this.$router.push('/')
            }).catch((error) =>{
                alert(error)
            })
        },
        
    }
}
</script>

<style>

</style>