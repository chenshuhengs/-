<template>
  <div id="add-blog">
    <div class="container">
      <form v-if="!this.bool">
        <div class="form-group mt-4">
          <label for="exampleFormControlInput1">标题</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" v-model="blog.title">
        </div>
        <div class="form-group mt-4">
          <label for="exampleFormControlTextarea1">内容</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="blog.content"></textarea>
        </div>
        <!-- --------------分        类------------------- -->
        <label class=" mt-4">标签分类:</label> <br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="Vue.js" v-model="blog.arrys">
          <label class="form-check-label" for="inlineRadio1">Vue.js</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="JavaScript" v-model="blog.arrys">
          <label class="form-check-label" for="inlineRadio2">JavaScript</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="Node.js" v-model="blog.arrys">
          <label class="form-check-label" for="inlineRadio3">Node.js</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="React.js" v-model="blog.arrys">
          <label class="form-check-label" for="inlineRadio3">React.js</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="Java" v-model="blog.arrys">
          <label class="form-check-label" for="inlineRadio3">Java</label>
        </div><br>
        <label class=" mt-4">作者</label>
        <input type="text" v-model="blog.author">
      </form>
      <button v-if="!this.bool" type="button" @click="post" class="btn btn-secondary mt-4">添加博客</button>
      <div v-if="bool">
        <h3 class="text-danger">提交成功</h3>
        <div class="card">
          <div class="card-header">
            {{this.blog.title}}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>{{this.blog.content}}</p>
              <footer class="blockquote-footer">作者：<cite title="Source Title">{{this.blog.author}}</cite></footer>
            </blockquote>
          </div>
        </div>
        <label>标签分类：</label>
        <ul>
          <li v-for="arry in this.blog.arrys">{{arry}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      blog:{
        title:'',
        content:'',
        author:'',
        arrys:[],
      },
      time:'',
      bool:false
    }
  },  
  methods:{
    post(){
      if (!this.blog.title || !this.blog.content || !this.blog.arrys || !this.blog.author) {
        alert('请填写相应的内容')
      }else{
        let User={ 
          title: this.blog.title,
          content: this.blog.content,
          arrys: this.blog.arrys,
          author: this.blog.author
        }
        let bool = window.confirm('确认要添加此用户信息吗？')
        if(bool){
          this.$http.post('http://localhost:3000/users-blog',User)
          .then((data) => {
            this.bool=true
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #success{
    border: 1px solid #e0e0e0;
  }
  h3{
    text-align: center;
  }
</style>
