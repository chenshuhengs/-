<template>
    <div id="details-blog">
        <div class="container">
          <form>
            <div class="form-group mt-4">
              <label for="exampleFormControlInput1">标题</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" v-model="blogs.title">
            </div>
            <div class="form-group mt-4">
              <label for="exampleFormControlTextarea1">内容</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="blogs.content"></textarea>
            </div>
            <!----------------分        类------------------- -->
             <label class=" mt-4">标签分类:</label> <br>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="Vue.js" v-model="blogs.arrys">
              <label class="form-check-label" for="inlineRadio1">Vue.js</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="JavaScript" v-model="blogs.arrys">
              <label class="form-check-label" for="inlineRadio2">JavaScript</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="Node.js" v-model="blogs.arrys">
              <label class="form-check-label" for="inlineRadio3">Node.js</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="React.js" v-model="blogs.arrys">
              <label class="form-check-label" for="inlineRadio3">React.js</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="Java" v-model="blogs.arrys">
              <label class="form-check-label" for="inlineRadio3">Java</label>
            </div><br>
            <label class=" mt-4">作者</label>
            <input type="text" v-model="blogs.author">
          </form>
          <button type="button" @click="submitBlog" class="btn btn-secondary">编辑提交</button>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      id:this.$route.params.id,
      blogs:{}
    }
  },
  created(){
    this.$http.get('http://localhost:3000/users-blog/'+ this.id)
      .then(function(data){
        this.blogs = data.body
      })
  },
  methods:{
    submitBlog(){
      if (!this.blogs.title || !this.blogs.content || !this.blogs.arrys || !this.blogs.author) {
        alert('请填写相应的内容')
      }else{
        let UserBlog={ 
          title: this.blogs.title,
          content: this.blogs.content,
          arrys: this.blogs.arrys,
          author: this.blogs.author
        }
        let bool = window.confirm('确认要重新编辑提交用户信息吗？')
        if(bool){
          this.$http.put('http://localhost:3000/users-blog/'+ this.id,UserBlog)
          .then((data) => {
            setTimeout(()=>{
              this.$router.push({path:'/'})
            },2000)
          })
        }
      }
    }
  }
}
</script>

<style scoped>

</style>