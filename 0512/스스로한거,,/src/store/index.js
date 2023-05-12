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
    GET_VIDEOS(state, videos){
      // console.log(videos)
      // console.log(state)
      state.videos = videos

    },
    SAVE_VIDEO(state, video) {
      console.log(video)
      state.savedVideo.push(video)
    },
      // const vdos = JSON.stringify(state.savedVDOs)
      // localStorage.setItem('savedVDOs', vdos)
    DELETE_VIDEO(state, video) {
      const id = state.savedVideo.indexOf(video)
      state.savedVideo.splice(id, 1)
    },
    LOAD_VIDEOS(state){
      const localStorageVideos = localStorage.getItem('savedVideos')
      // 내 로컬스토리지에 데이터가 있었을 경우만 saved_videos에 넣어주기
      if (localStorageVideos) {
        state.savedVideo = JSON.parse(localStorageVideos)
    }
  },
  
  },
  actions: { 
    // async 비동기,, 작업처리할 때
    async getVideos(context, keyword){
      try {
        // await 는 async 함수 내에서 사용되는 키워드,, 비동기작업완료될때까지 기다렸다가 결과 반환
        const res = await axios.get(API_URL,{
          params: {
            part: 'snippet',
            type: 'video',
            maxResults: 10,
            key: API_KEY,
            q: keyword
          }
        })
      // mutation을 호출하여 state를 업데이트 할거야
      // console.log(context,keyword)
      context.commit('GET_VIDEOS', res.data.items)
      }
      // try 끝
      
      catch(err) {
        console.log(err)
      }
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
      // 로컬스토리지는 문자열 밖에 인식 못함
      // JSON.stringify => 문자열로 반환
      const jsonVideos = JSON.stringify(context.state.saved_videos)
      localStorage.setItem('savedVideos', jsonVideos)
    },
  },
  modules: {
  }
})
