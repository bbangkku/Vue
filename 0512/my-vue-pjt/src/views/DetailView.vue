<template>
  <div>
    {{ video}}
    <!-- <h1>{{ video.snippet.title }}</h1> -->
    <!-- <iframe :src="'https://www.youtube.com/embed/'+ this.$route.params.videoId"></iframe> -->
    <div v-if="url">
      <iframe :src="url" frameborder="0" allowfullscreen width="720px" height="500px"></iframe>
    </div><!-- <p>{{ videoDescription }}</p> -->
        <p>{{ video?.description }}</p>
    <div v-if="!isSaved">
      <b-button variant="primary" @click="saveVideo()">동영상 저장</b-button>
    </div>
    <div v-else>
      <b-button variant="success" @click="deleteVideo()">저장 취소</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailView',
  computed: {
    videoId(){
      return this.$route.params.videoId
    },
    isSaved() {
    if (!this.video) return false
    return this.$store.state.savedVideo.find((item) => {
      return item.id === this.video.id
    }) ? true : false
    }},
  created(){
    this.$store.dispatch('loadVideos')
    this.getFullyoutube()

  },
  data(){
    return{
      video: null,
        year: null,
        month: null,
        day: null,
        url: ''  
    }
  },
  // 0508에 했어 
  methods: {
    getFullyoutube(){
        const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
        axios({
          method: 'get',
          url: `https://www.googleapis.com/youtube/v3/videos`,
          params: {
            key: API_KEY,
            part: 'snippet',
            id: this.$route.params.id
          }
        })
        .then((response) => {
          console.log(response)
          const video = response.data.items.map(item => ({
            id: this.$route.params.id,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.medium.url,
            upload: item.snippet.publishedAt
          }))
          console.log(video)
          this.video = video[0]
          this.month = this.video.upload.slice(5, 7)
          this.day = this.video.upload.slice(8, 10)
          this.url = `https://www.youtube-nocookie.com/embed/${this.$route.params.id}`
          
          console.log(this.video)
        })
        .catch((error) => {
          console.log(error)
        })
      },
    // laterVideo(){
    //   // 일단 갖고올거 정의해줘야지,,
    //   const videos = localStorage.getItem('laterVideos')
    //   // console.log(videos)
    //   // 갖고올게 있다면 ,, 
    //   if (videos){
    //     // 가져올 때는 JSON > JavaScript객체로 변환
    //     const laterVideos = JSON.parse(videos) 
    //     // console.log(laterVideos)
    //     // 자 이제서야 저장할 수 있겠다
    //     laterVideos.push({
    //       id: this.videoId,
    //     })
    //     // 저장할땐 Javascript > JSON 문자열로 변환해야함
    //     localStorage.setItem('laterVideos', JSON.stringify(laterVideos))      
    //   } else {
    //     localStorage.setItem('laterVideos', JSON.stringify([{
    //       id: this.videoId,
    //     }]))
      // }
    // },
    saveVideo() {
      console.log("들어옴?")
      this.$store.dispatch('saveVideo', this.video)
      console.log(this.video)
    },
    deleteVideo() {
      this.$store.dispatch('deleteVideo', this.video)
    }
  }
}
</script>

<style>

</style>