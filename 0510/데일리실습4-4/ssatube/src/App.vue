<template>
  <div id="app">
    <h1>SSAFY TUBE</h1>
    <div class="video-container">
      <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
      <h2>{{ videoTitle }}</h2>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      videoUrl: '',
      videoTitle: '',
    };
  },
  created() {
    axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        key: process.env.VUE_APP_YOUTUBE_API_KEY,
        type: 'video',
        part: 'snippet',
        q: '코딩노래',
        maxResults: 1,
      }
    })
    .then(response => {
      // console.log(response.data.items[0].id.videoId)
      // console.log(response.data.items[0].snippet.title)
      const videoId = response.data.items[0].id.videoId;
      this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
      this.videoTitle = response.data.items[0].snippet.title;
    })
    .catch(error => {
      console.log(error);
    });
  },
  components: {
  }
}
</script>
<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
<!-- Bootstrap CSS and Google Font CDN -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR" rel="stylesheet">