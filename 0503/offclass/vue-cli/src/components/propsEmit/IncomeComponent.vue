<template>
  <div>
    <h1>소득세 계산기</h1>
    <!-- 연봉 입력 구간 -->
    <div>
      <label for="income">연봉 입력(만원): </label>
      <input type="number" id="income" v-model.number="income">

    </div>
    <!-- 세액감면액 입력 구간 -->
    <div>
      <label for="tax-credit">세액감면액(만원): </label>
      <input type="number" id="tax-credit" v-model.number="taxCredit">

    </div>
    <hr>

    <h2>종합소득금액 : {{ income }} 만원</h2>
    <h2>종합소득공제 : (-) 150 만원</h2>
    <h2>과세표준 : {{ taxbase }} 만원</h2>
    <h2>버튼클릭후 세금 : {{ finalcal }}</h2>
    <hr>
  <!-- 상위에서 하위 줄때 내가 이 데이터 줄게 !! -->
  <!-- kebab-case로 넘겨줘 my-income = "넘겨줄데이터" -->
    <TaxrateComponent
    :my-income = "taxbase"
    :my-taxcredit = "taxCredit"
    @get-discount="getDisCount"  
    />
  

  </div>
</template>

<script>
import TaxrateComponent from './TaxrateComponent.vue';
export default {
  name: 'IncomeComponent',
  data(){
    return {
      income: 0,
      taxCredit: 0,
      finalcal: 0,
    }
  },
  methods: {
        getDisCount(finalTaxData){
            console.log('자식에게서 호출옴')
            console.log(`자식이보낸데이터: ${finalTaxData}`)
            this.finalcal = finalTaxData
        }},
  components:{
    TaxrateComponent,
  },
  // 1. 원본 데이터 수정 없이
  // 2. 출력을 원하는 대로 변경하고 싶다.
  computed:{
    taxbase(){
      // const base = 150
      // const base_tax = Math.max(this.income - base, 0 )
      // return base_tax
      return this.income - 150 >= 0 ? this.income - 150 : 0

    },

  }
}
</script>

<style>

</style>