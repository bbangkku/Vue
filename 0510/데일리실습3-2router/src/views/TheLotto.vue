<template>
  <div>
    <h2>로또</h2>
    <button @click="goLotto()">Get Lucky Numbers</button>
    <p> 추천번호 : {{ lottoNumbers }}</p>
    <h3>추천 받고 싶은 숫자의 수</h3>
    <input type="number"
     v-model.number="count"
     @keyup.enter="goLotto()"
     >    
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'TheLotto',
    computed: {
        lottoNumbers(){
            // 1~45 숫자 배열 생성
            const numbers = _.range(1,46)
            // 6개 랜덤으로 선택
            // const lottoNumbers = _.sampleSize(numbers,6)
            const lottoNumbers = _.sampleSize(numbers,this.$route.params.count)
            
            // 숫자를 보기 좋게 정렬
            const sortedLottoNumbers = _.sortBy(lottoNumbers)
            // 반환
            return sortedLottoNumbers
        }
    },
    data(){
        return{
            count:6
        }
    },
    methods:{
        goLotto(){
            location.reload()
            this.$router.push(`/lotto/${this.count}`).catch(()=>{
                console.log('같은숫자 입력함!')
            })
        }
    },
    created(){
        // 전달받을땐 router가 아니라 route
        console.log(this.$route.params)
    }

        
    
}

</script>
    
<style>

</style>