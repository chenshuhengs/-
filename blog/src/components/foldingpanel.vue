<template>
  <div class="footer">
    <div class="speak" @getSearch="getSearch(bool)">
      <span class="iconfont icon-male">:</span
      >我大意了没有闪，年轻人不讲武德！！！
    </div>
    <div class="focus">
      <p>聚焦</p>
      <ul>
        <li v-for="(item, index) in imgs.bgs.length" :key="index">
          <div class="container">
            <div class="front" :class="'front' + index">
              <div class="contents" :class="'contents' + index"></div>
            </div>
            <div class="back" :class="'back' + index">
              <div class="contents">
                <h2>年轻人不讲武德</h2>
                <span>耗子尾汁</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import imgs from "@/request/img.js";
export default {
  data() {
    return {
      imgs: imgs,
    };
  },
  methods: {
    getSearch(bool) {
      console.log(bool);
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  max-width: 900px;
  margin: 0 auto;
  .speak {
    width: 100%;
    color: #505050;
    background: #fbfbfb;
    padding: 20px 0;
    margin-top: 50px;
    margin-bottom: 40px;
    span {
      display: inline-block;
      margin-right: 10px;
    }
  }
  .focus {
    margin-bottom: 100px;
    width: 100%;
    p {
      padding-bottom: 20px;
      border-bottom: 1px dashed #ececec;
      margin-bottom: 20px;
    }
    ul {
      display: flex;
      width: 100%;
      color: #fff;
      font-size: 22px;
      li {
        width: ~"100% / 3";

        &:nth-of-type(2) {
          margin: 0px 10px;
        }
        .container {
          position: relative;
          height: 400px;
          width: 290px;
          /* 开启3d */
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          /* background-color: #0984e3; */
          /* 背景居中 */
          background-size: cover;
          background-position: center;
          /* 内容居中 */
          display: flex;
          justify-content: center;
          align-items: center;
          /* 开启3d */
          perspective: 1000px;
          transform-style: preserve-3d;
          /* 3D模式下隐藏所有翻转的信息 */
          backface-visibility: hidden;
          /* 临时 */
          /* transform: rotateY(60deg); */
          transition: transform 0.7s ease-in-out;
        }
        .front2 {
          /* 增加一个渐变背景，暗化背景图，让文字更加清晰 */
          background-image: url("../assets/images/color3.jpg");
        }

        .back2 {
          background-image: url("../assets/images/mbg3.jpg");
          /* 翻转 翻转后，默认隐藏 */
          transform: rotateY(180deg);
        }

        .front1 {
          /* 增加一个渐变背景，暗化背景图，让文字更加清晰 */
          background-image: url("../assets/images/color1.jpg");
        }

        .back1 {
          background-image: url("../assets/images/mbg1.jpg");
          /* 翻转 翻转后，默认隐藏 */
          transform: rotateY(180deg);
        }
        .front0 {
          /* 增加一个渐变背景，暗化背景图，让文字更加清晰 */
          background-image: url("../assets/images/color2.jpg");
        }

        .back0 {
          background-image: url("../assets/images/mbg2.jpg");
          /* 翻转 翻转后，默认隐藏 */
          transform: rotateY(180deg);
        }

        .contents {
          /* 形成文字与背景分离 */
          transform: translateZ(60px);
        }

        .container:hover .front {
          /* 前面的翻转到后面，并且隐藏掉 */
          transform: rotateY(-180deg);
        }
        .container:hover .back {
          /* 后面的图层翻转到前端 */
          transform: rotateY(0deg);
        }
      }
    }
  }
}
</style>
