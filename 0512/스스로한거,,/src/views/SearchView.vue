<template>
  <div>

    <VideoSearch/>
    <div>
      <div class="video" v-for="(video, index) in videos" :key="index">
         <img :src="video.snippet.thumbnails.medium.url" alt="video thumbnail" @click="goToDetail(video)">
         
        <div>{{ video.snippet.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoSearch from '../components/VideoSearch.vue'

export default {
  name:"SearchView",
  components:{
    VideoSearch,
  },
  computed:{
    videos(){
      return this.$store.state.videos
    }
  },
  methods: {
    goToDetail(video){
      // console.log(video)
      this.$router.push({ name: 'DetailView', params: { videoId: video.id.videoId }})
    },
  },
  

}
  
</script>

<style>
.video {
  display: inline-block;
  margin: 10px;
  width: 300px; /* 동영상 컨테이너의 너비 */
}
</style>