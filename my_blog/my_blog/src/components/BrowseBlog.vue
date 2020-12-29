<template>
  <div id="browse-blog">
    <div class="container">
      <article v-for="userData in userDatas">
        <header class="mb-2">
          <h3>
            <a href="#">{{ userData.title }}</a>
          </h3>
        </header>
        <div class="mt-3">{{ userData.content }}</div>
        <footer>
          <ul>
            <span>属于:</span
            ><a href="#"
              ><li
                v-for="(arr, index) in userData.arrys"
                class="mr-2"
                :key="index"
              >
                {{ arr }}
              </li></a
            ><span>分类</span>
            <a href="#" @click="deleate(userData.id)"
              ><span class="iconfont icon-shanchu two ml-3">删除详情</span></a
            >
            <router-link :to="'/detailsblog/' + userData.id" id="one">
              <span class="iconfont icon-yanjing1 two">编辑详情</span>
            </router-link>
          </ul>
        </footer>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userDatas: []
    };
  },
  created() {
    this.$http.get("http://localhost:3000/users-blog").then(item => {
      this.userDatas = item.body;
    });
  },
  methods: {
    deleate(id) {
      this.$http.delete("http://localhost:3000/users-blog/" + id).then(data => {
        this.$http.get("http://localhost:3000/users-blog").then(item => {
          this.userDatas = item.body;
        });
      });
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
ul {
  margin-top: 20px;
  padding-left: 0;
}
ul > a > li {
  list-style: none;
  display: inline-block;
}
ul > a,
span {
  color: #757575;
  font-size: 12px;
}
article {
  border-bottom: 1px solid #ededed;
  margin-top: 40px;
  margin-bottom: 0px;
}
header > h3 > a {
  color: #21759b;
}
footer > a,
footer > a > span {
  font-size: 14px;
}

#one {
  display: inline;
  text-align: center;
  /* position: relative; */
}
.two {
  /* display:block ; */
  position: relative;

  float: right;
  clear: left;
  bottom: -6px;
}
</style>
