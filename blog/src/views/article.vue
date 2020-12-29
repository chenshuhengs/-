<template>
  <div class="article">
    <headerTop></headerTop>
    <div class="articleContent">
      <div class="title">
        <span>#</span>
        <span>{{ getData.title }}</span>
      </div>
      <div class="time">
        <span>发表时间:</span>
        <span>{{ getData.time }}</span>
      </div>
      <div class="content">{{ getData.content }}</div>
      <div class="social">
        <ul>
          <span>标签:</span>
          <li v-for="(item, index) in getData.social" :key="index">
            {{ item }}
          </li>
        </ul>
        <div class="author">
          <span>作者:</span>
          {{ getData.author }}
        </div>
      </div>
    </div>
    <div id="start" @click="getHeader">
      <span class="iconfont icon-fanhuidingbu"></span>
    </div>
    <footerBottom></footerBottom>
  </div>
</template>

<script>
import headerTop from "@/components/header.vue";
import footerBottom from "@/components/footer.vue";
export default {
  components: { headerTop, footerBottom },
  data() {
    return {
      getData: "",
    };
  },
  created() {
    this.getAdata();
  },
  methods: {
    async getAdata() {
      const res = await this.$get("/article/" + this.$route.query.id);
      this.getData = res.data;
      console.log(this.getData);
    },
    getHeader() {
      this.topFunction();
    },
  },
};
</script>

<style lang="less" scoped>
.article {
  .articleContent {
    max-width: 900px;
    margin: 0px auto;
    margin-top: 50px;
    .title {
      font-size: 40px;
      margin-bottom: 50px;
      span:first-of-type {
        color: red;
        display: inline-block;
        margin-right: 30px;
      }
    }
    .title span:hover {
      border-bottom: 1px solid #eee;
    }
    .time {
      letter-spacing: 2px;
      margin-bottom: 50px;
      span:first-of-type {
        display: inline-block;
        margin-right: 10px;
      }
      // color: #000;
    }
    .content {
      width: 100%;
      padding: 20px;
      background: #000;
      color: #fff;
      letter-spacing: 2px;
    }
    .social {
      display: flex;
      align-items: center;
      margin-top: 50px;
      justify-content: space-between;
      margin-bottom: 70px;
      ul {
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          margin-right: 10px;
        }
        li {
          padding: 5px 10px;
          border: 2px solid #e0e0e0;
          padding: 10px;
          border-radius: 10px;
          margin-right: 20px;
        }
      }
      .author {
        letter-spacing: 1px;
        // color: red;
        border-bottom: 1px solid #000;
        span {
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }
  #start {
    position: fixed;
    right: 80px;
    bottom: 100px;
    z-index: 10;
    .iconfont {
      font-size: 70px;
    }
  }
  #start:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
}
</style>
