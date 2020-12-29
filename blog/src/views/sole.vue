<template>
  <div class="sole">
    <headerTop></headerTop>
    <div class="content">
      <div v-if="bool">
        <p>分类--{{ technologys.length }}</p>
        <ul>
          <li
            v-for="(item, index) in technologys"
            :key="index"
            @click="getdetailedSole(item.name)"
          >
            <!-- <router-link
            :to="{
              path: 'detailedsole/' + item.name,
              query: { name: item.name },
            }"
          ></router-link> -->
            <span>{{ index + 1 }}.{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <slot></slot>
    </div>
    <!-- <router-view /> -->
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
  name: "sole",
  components: {
    headerTop,
    footerBottom,
  },
  data() {
    return {
      technologys: [
        { name: "CAD" },
        { name: "3DMAX" },
        { name: "JavaScript" },
        { name: "C" },
        { name: "C++" },
      ],
      bool: true,
    };
  },
  methods: {
    getHeader() {
      this.topFunction();
    },
    getdetailedSole(name) {
      console.log(name);
      this.$router.push({
        path: "/sole/detailedsole",
        query: {
          //query是跳转是传递的参数，对象类型
          name,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.sole {
  .content {
    margin: 30px auto;
    max-width: 800px;
    height: 500px;
    background: #303030;
    border-radius: 10px;
    padding: 30px;
    color: #fff;
    p {
      text-align: center;
      font-size: 30px;
      margin-bottom: 30px;
    }
    ul {
      li {
        font-size: 20px;
        margin-bottom: 20px;
        color: aqua;
        span:hover {
          border-bottom: 2px solid aqua;
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
