<template>
  <div>
      <b-card :img-src="video.thumbnail" :img-alt="video.title" img-top @click="goDetail()">
        <b-card-title>{{ video.title }}</b-card-title>
        <b-card-text>{{ video.description }}</b-card-text>
      </b-card>
  </div>
</template>

<script>
export default {
    name: "SearchVideoList",
    props: {
        video: Object
    },
    methods: {
      goDetail() {
        console.log('detail로')
        this.$router.push({name: "DetailView", params:{id: this.video.id}})
        
      }
    }
}
</script>

<style>

</style>