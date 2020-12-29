<template>
  <div class="header">
    <div class="navbar">
      <div></div>
      <ul>
        <li v-for="(item, index) in navbar" :key="index">
          <router-link :to="{ path: item.path }">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="bg">
      <div class="head"></div>
      <div class="introduce">大家好，我是混元太极掌门人，马保国</div>
      <ul class="icon">
        <li v-for="(item, index) in icon" :key="index">
          <span
            class="iconfont"
            :class="item.class"
            :style="{ color: item.color }"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-top",
  data() {
    return {
      navbar: [
        { name: "首页", path: "/" },
        { name: "分类", path: "/sole" },
        { name: "标签", path: "/technology" },
        { name: "关于", path: "/about" },
        { name: "进阶", path: "/advance" },
      ],
      icon: [
        { class: "icon-weibo", color: "red" },
        { class: "icon-CN_bilibili", color: "#000" },
        { class: "icon-github", color: "pink" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/images/bg.jpg") no-repeat center/cover;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .navbar {
    display: flex;
    max-width: 1200px;
    padding: 20px 0px;
    justify-content: center;
    color: #fff;
    ul {
      display: flex;
      li {
        margin-right: 30px;
        font-size: 20px;
        a {
          color: #fff;
          padding: 10px 15px;
        }
        a:hover {
          background: #2d2e30;
          border-radius: 5px;
        }
      }
      span {
        font-size: 30px;
        display: inline-block;
        margin-left: 20px;
      }
    }
  }
  .bg {
    padding-bottom: 50px;
    .head {
      background-image: url("../assets/images/mbg.jpg");
      background-size: 100px 100px;
      border: 2px solid #fff;
      border-radius: 50%;
      height: 100px;
      width: 100px;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 40px;
    }
    .introduce {
      width: 20%;
      padding: 20px 30px;
      background: rgba(0, 0, 0, 0.3);
      margin: 0 auto;
      line-height: 30px;
      font-size: 14px;
      color: #fff;
      text-align: center;
      white-space: nowrap;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      li {
        width: 30px;
        height: 30px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        &:nth-of-type(2) {
          margin: 0px 13px;
        }
      }
    }
  }
}
</style>
