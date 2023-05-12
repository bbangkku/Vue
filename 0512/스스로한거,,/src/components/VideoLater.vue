<template>
  <div>
  <h1>나중에 꼭 보자잉..</h1>
    <b-row>
      <b-col cols="4" v-for="video in videos" :key="video.id">
        <SearchVideoList
          :video = "video"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SearchVideoList from '@/components/SearchVideoList.vue'

export default {
  name:"VideoLater",
  components: {
  SearchVideoList
  },
  data(){
    return{
      videos: null,
    }
  },
  created() {
  this.$store.dispatch('loadVideos')
  this.videos = this.$store.state.saved_videos
  console.log(this.videos.description)
  
  this.videos.forEach(element => {
    element.description = element.description.slice(0, 100)
  });
}
}
  
</script>

<style>

</style>