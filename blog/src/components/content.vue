<template>
  <div class="content">
    <p>近况</p>
    <ul>
      <li v-for="(item, index) in dataList" :key="index">
        <div class="aboutmbg">
          <div class="images">
            <img :src="images.txs[Math.floor(Math.random() * 8)]" alt="" />
            <!-- <div class="attention">
              <div>
                <span class="iconfont icon-xiaoxi"></span><span></span>NOTHRNG
              </div>
              <div>
                <span class="iconfont icon-yanjing"></span><span>热度2010</span>
              </div>
            </div> -->
          </div>
          <div class="font">
            <div class="top">
              <h2 class="title">
                <router-link
                  :to="{ path: '/article:' + item.id, query: { id: item.id } }"
                  >﹝TOP﹞{{ item.title }}</router-link
                >
              </h2>
              <span class="iconfont icon-shijian">{{ item.time }}</span>
            </div>
            <div>
              <div class="content">{{ item.content }}</div>
            </div>
          </div>
        </div>
        <div class="shenglue">阅读原文</div>
        <div class="border-line"></div>
      </li>
    </ul>
    <div class="page">
      <Page
        sync="dataListPage"
        :total="allInit.length"
        :page-size="pageSize"
        size="small"
        :current="currentPage"
        @on-change="changePage"
      />
    </div>
    <div id="start" @click="getHeader">
      <span class="iconfont icon-fanhuidingbu"></span>
    </div>
  </div>
</template>

<script>
import imgs from "@/request/img.js";
export default {
  data() {
    return {
      icon: [
        { class: "icon-huo" },
        { class: "icon-shijian" },
        { class: "icon-xiaoxi" },
        { class: "icon-19" },
        { class: "icon-yanjing" },
        { class: "icon-xiaoxi" },
      ],
      article: "",
      images: imgs,
      allInit: "", //全部文章
      currentPage: 1, // 当前页码
      pageSize: 8,
      dataList: [], //每页显示的文章数据
    };
  },
  created() {
    this.getarticle();
  },
  methods: {
    async getarticle() {
      const res = await this.$get("/article");
      this.dataList = this.allInit = res.data;
      this.dataList = this.dataList.slice(0, 8);
    },
    changePage(val) {
      console.log(val);
      this.dataList = this.allInit;

      this.dataList = this.dataList.slice(
        (val - 1) * this.pageSize,
        val * this.pageSize
      );
      console.log(this.dataList);
    },
    // 返回顶部
    getHeader() {
      this.topFunction();
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  p {
    padding-bottom: 20px;
    border-bottom: 1px dashed #ececec;
    margin-bottom: 20px;
  }
  ul {
    width: 100%;
    li {
      margin-bottom: 20px;
      .aboutmbg {
        display: flex;
        align-items: center;
        height: 150px;
        .images {
          position: relative;
          img {
            width: 113px;
            height: 113px;
            border: 5px solid #e0e0e0;
            border-radius: 50%;
            margin-right: 30px;
            z-index: 999;
          }
          .attention {
            position: absolute;
            width: 100px;
            color: #b3b3b3;
            font-size: 12px;
            border-top: 1px solid #b3b3b3;
            padding-top: 10px;
            top: 25px;
            left: 12px;
            z-index: -1;
            div {
              span {
                white-space: nowrap;
              }
              span:first-of-type {
                margin-right: 20px;
              }
              &:nth-of-type(1) {
                margin-bottom: 10px;
              }
            }
          }
        }

        .font {
          .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            .title {
              font-size: 22px;
              color: #737373;
              font-weight: 600;
              width: 450px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .title:hover {
              color: #a0dad0;
            }
            span {
              color: #989898;
              font-size: 14px;
            }
          }
          .content {
            height: 30px;
            width: 100%;
            font-size: 15px;
            position: relative;
            overflow: hidden;
            font-family: miranafont, "Hiragino Sans GB", STXihei,
              "Microsoft YaHei", SimSun, sans-serif;
            color: #6f6f6f;
            letter-spacing: 1px;
            line-height: 30px;
          }
          .content::after {
            content: "..."; // '...'
            position: absolute;
            bottom: 0;
            right: 0px;
            padding-left: 0px;
          }
        }
      }

      .shenglue {
        float: right;
        span {
          font-size: 26px;
        }
        color: #a0dad0;
      }
      .shenglue:hover {
        color: #e0e0e0;
      }
      .border-line {
        width: 30%;
        height: 1px;
        // margin-top: 30px;
        display: flex;
        margin: 30px auto;
        border: 0;
        background: #efefef;
      }
    }
  }
  .page {
    text-align: center;
    margin-bottom: 20px;
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
