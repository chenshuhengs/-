<template>
  <div id="app">
     <div id="header-blog" class="site">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link  class="navbar-brand" to='/'>博客主页</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <!-- <a class="nav-link" href="#">博客浏览 <span class="sr-only">(current)</span></a> -->
              <router-link  class="nav-link" to='/' >博客浏览</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">添加博客</a> -->
              <router-link class="nav-link" to="/addblog">添加博客</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">关于我们</a> -->
              <router-link class="nav-link" to="/aboutblog">关于我们</router-link>
            </li>
           
 
          </ul>
        </div>
      </nav>
    <router-view></router-view>
  </div>
</div>
</template>

<script>

export default {
  data(){
    return{
      
    }
  },
 
}
</script>

<style>
    .site{
    margin: 40px auto;
    max-width: 1200px;
    overflow: hidden;
    background-color: rgb(255, 255,255 );
    border-color: rgb(68, 68, 68);
  }
</style>
