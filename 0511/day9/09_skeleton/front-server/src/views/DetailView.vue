<template>
  <div>
    <h1>Detail</h1>
    <!-- <p>글 번호 : {{ article?.id }}</p>
    <p>제목 : {{ article?.title }}</p>
    <p>내용 : {{ article?.content }}</p>
    <p>작성시간 : {{ article?.created_at }}</p>
    <p>수정시간 : {{ article?.updated_at }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  data() {
    return {
      article: null
    }
  },
  created() {
  },
  methods: {
    getArticleDetail(){
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/${this.$route.params.id}/`,
      })
      .then((res) =>{
        console.log(res)
        this.article = res.data
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>
