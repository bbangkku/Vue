<template>
  <div>
  <h2>나중에 볼 동영상</h2>
    <VideoLater/>
  </div>
</template>

<script>
import VideoLater from '@/components/VideoLater.vue';
export default {
  name:"LaterView",
  components:{
    VideoLater
  },
// computed:{
//     laterVideos() {
//       const videos = localStorage.getItem("laterVideos");
//       if (videos) {
//         const parsedVideos = JSON.parse(videos);
//         return parsedVideos
//       } else {
//         return [];
//       }
//   }
// },
//   methods: {
//     goToDetail(video){
//       this.$router.push({ name: 'DetailView', params: { videoId: video.id.videoId }})
//     }
//   },
//   watch: {
//   laterVideos(newVideos) {
//     localStorage.setItem('laterVideos', JSON.stringify(newVideos));
//   }
//   },
//   component:{
//     VideoLater
//   }
}
  
</script>

<style>

</style>