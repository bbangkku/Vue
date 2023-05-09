<template>
  <div>
    <HelloWorld msg = "첫번째 페이지입니다"/>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name:'FirstVue',
    components: {
        HelloWorld
    },

}
</script>

<style>

</style>