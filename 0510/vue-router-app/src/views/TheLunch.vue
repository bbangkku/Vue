<template>
    <div>
      <h2>점심 메뉴 추천</h2>
      <button @click="refresh()">Pick Lunch</button>
      <p>추천 메뉴 : {{ recommendMenu }}</p>
      <h4>로또를 뽑아보자</h4>
      <button @click="goToLotto()">Pick Lotto</button>
    </div>
  </template>
  
  <script>
  import _ from 'lodash'
  
  export default {
    name: 'TheLunch',
    data() {
      return {
        menus: ['국밥', '제육볶음', '뼈해장국', '딤섬', '잔치국수']
      }
    },
    computed: {
      recommendMenu() {
        return _.sample(this.menus)
      }
    },
    methods: {
      refresh() {
        // 현재 페이지에서 현재 페이지로 push 요청 시 버그 발생
        // 막아놓은 원인1. 같은 경로 요청 시도 시 성능이 느려짐
        //        브라우저는 이전 페이지에 대한 정보를 가지고 있음(히스토리)
        //        히스토리에 같은 경로가 또 추가됨
        // 막아놓은 원인2. 동일한 페이지를 여러 번 방문하는 것이
        //        사용자 경험을 저하한다(사용자의 흐름에 방해됨)
        // this.$router.push('/lunch')
  
        // 새로고침
        location.reload()
  
        // 같은 경로 사용 시 막기
        // push, replace 함수들이 Promise 객체를 반환
        // 새로고침이 일어나진 않지만 버그는 안 남
        this.$router.push('/lunch').catch(() => {
          console.log('같은 경로 요청보냄')
        })
      },
      goToLotto() {
        this.$router.push({
          name: 'lotto',
        })
      }
    }
  }
  </script>
  
  <style>
  
  </style>