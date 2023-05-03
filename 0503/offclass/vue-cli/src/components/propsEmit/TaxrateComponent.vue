<template>
    <div>     
      <h2>산출세액 : {{ caltax }} 만원</h2>
      <h2>세액감면 : (-){{ myTaxcredit }} 만원</h2>
      <h2>버튼클릭후 세금 : {{ finalTaxData }}</h2>
    <hr>
    <FinaltaxComponent
    :cal-tax = "caltax"
    :my-taxcredit = "myTaxcredit"
    @get-discount="getDisCount"
    />

    <!-- @자식의 이벤트명 = 호출할 부모의함수 -->
    </div>
    

</template>

<script>
import FinaltaxComponent from './FinaltaxComponent.vue';
export default {
    name: "TaxrateComponent",
    data() {
        return {
            finalcal: 0,

        };
    },
    props: {
        // 넘겨준거 받을때는 camelCase
        myIncome: Number,
        myTaxcredit: Number,
    },
    methods: {
        getDisCount(finalTaxData){
            console.log('자식에게서 호출옴')
            console.log(`자식이보낸데이터: ${finalTaxData}`)
            this.finalcal = finalTaxData
            // 부모에게 자식의 데이터를 전달
            this.$emit('get-discount',finalTaxData)
        }},
    computed: {
        caltax() {
            let result;
            if (this.myIncome <= 1200) {
                result = (this.myIncome) * 0.06;
            }
            else if (this.myIncome <= 4600) {
                result = (this.myIncome) * 0.15 - 108;
            }
            else if (this.myIncome <= 8800) {
                result = (this.myIncome) * 0.24 - 522;
            }
            else if (this.myIncome <= 15000) {
                result = (this.myIncome) * 0.35 - 1490;
            }
            else if (this.myIncome <= 30000) {
                result = (this.myIncome) * 0.38 - 1940;
            }
            else if (this.myIncome <= 50000) {
                result = (this.myIncome) * 0.4 - 2540;
            }
            else if (this.myIncome <= 100000) {
                result = (this.myIncome) * 0.42 - 3540;
            }
            else if (this.myIncome > 100000) {
                result = (this.myIncome) * 0.45 - 6540;
            }
            return Math.round(result);
        }
    },
    components: { FinaltaxComponent },


}
</script>

<style>

</style>