import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

export default new Vuex.Store({
  state: {
    videos:[],
    savedVideo:[],
  },
  getters: {
    get_youtube(state) {
      return state.videos
    }
  },
  mutations: {
    GET_VIDEOS(state, videos) {
      console.log(videos)
      state.videos = videos
    },
    SAVE_VIDEO(state, video) {
      state.savedVideo.push(video)
    },
    DELETE_VIDEO(state, video) {
      const id = state.savedVideo.indexOf(video)
      state.savedVideo.splice(id, 1)
    },
    LOAD_VIDEOS(state){
      const localStorageVideos = localStorage.getItem('savedVideo')
      console.log(state)
      // 내 로컬스토리지에 데이터가 있었을 경우만 saved_videos에 넣어주기
      if (localStorageVideos) {
        state.savedVideo = JSON.parse(localStorageVideos)
      }
  },
  
  },
  actions: { 
    // async 비동기,, 작업처리할 때
    getvideos(context, keyword){
      axios({
            method: 'get',
            url: API_URL,
            params: {
              key: API_KEY,
              part: 'snippet',
              type: 'video',
              maxResults: 10,
              q: keyword
          }
        })
      // mutation을 호출하여 state를 업데이트 할거야
      // console.log(context,keyword)
      .then((response) => {
        console.log(response.data)
        const videos = response.data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium.url,
          upload: item.snippet.publishedAt
        }))
        context.commit('GET_VIDEOS', videos)
        })
      // try 끝
      
      .catch((err) => {
        console.log(err)
      })
    },
    loadVideos(context){
      context.commit('LOAD_VIDEOS')
    },
    saveVideo(context, video) {
      console.log(video)
      context.commit("SAVE_VIDEO", video)
      context.dispatch('saveVideoToLocalStorage')
    },
    deleteVideo(context, video){
      context.commit('DELETE_VIDEO', video)
      context.dispatch('saveVideoToLocalStorage')
    },
    saveVideoToLocalStorage(context) {
      const jsonVideos = JSON.stringify(context.state.savedVideo)
      localStorage.setItem('savedVideos', jsonVideos)
    },
  },
  modules: {
  }
})
