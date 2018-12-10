
<template>
    <div class="index-container">
      <div class="container">
         <div class="content-index">
             <slide ref="slide" :loop='true' :autoPlay='true' :click="true" class="slide-container">
                <img v-for="(item,index) in items" :key="index" :src="item.imgUrl" alt=""/>
             </slide>
         </div>
         <div class="star-panel">

         </div>
      </div>
    </div>
</template>
<script>
import slide from "@/base/slide/slide";
export default {
  data() {
    return {
      items: [
        { imgUrl: require("@/assets/img/yao1.png") },
        { imgUrl: require("@/assets/img/yao2.png") },
        { imgUrl: require("@/assets/img/yao3.png") },
        { imgUrl: require("@/assets/img/yao4.png") },
        { imgUrl: require("@/assets/img/yao5.png") },
        { imgUrl: require("@/assets/img/yao6.png") }
      ],
      video: require("@/assets/mp4/1526477885839.mp4"),
      popupVisibl: false,
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      },
      swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  components: {
    slide
  },
  mounted() {
    // this.$refs.video.play();
  }
};
</script>
<style scoped lang='less'>
.index-container {
  // background: skyblue;
  width: 100%;
  height: 100%;
  // background-image: url('../assets/img/index-bg0.png');
  .container {
    width: 100%;
    height: 100%;
    // background-image: url("../assets/img/star.png");
    background-repeat: no-repeat no-repeat;
    background-size: 100% 100%;
    filter: grayscale(0.2);
    color: #ff8eb3;
    font-size: 40px;
    word-break: break-all;
    text-indent: 1rem;
    display: flex;
    justify-content: center;
    align-items: stretch;
    .star-panel {
      width: 100%;
      height: 300px;
      background-image: url("../assets/img/star.png");
    }
    h4 {
      width: 100%;
      text-align: center;
      color: #fff;
    }
    .content-index {
      width: 100%;
      height: 600px;
      color: #fff;
      z-index: 9;
      p {
        width: 100%;
        background: linear-gradient(to right, orangered, orange, wheat);
        -webkit-background-clip: text;
        color: transparent;
        font-weight: 600;
        text-align: center;
        font-size: 40px;
      }
      .swiper {
        width: 100%;
        height: 300px;
        background: #ff8eb3;
        // position: absolute;
      }
      .slide-container {
        position: relative;
        width: 100%;
        height: 100%;
        img {
          display: inline-block;
          width: 100vw;
          height: 100%;
          object-fit: cover;
          transform: translateX(-75px);
        }
      }
    }
    .heart-container {
      width: 350px;
      height: 350px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: #ff8eb3;
      border: 1px solid #ff8eb3;

      .left-heart {
        background: #ff8eb3;
        border: 1px solid #ff8eb3;
        width: 350px;
        height: 350px;
        position: absolute;
        transform: rotate(90deg);
        left: -50%;
        border-radius: 50%;
      }
      .right-heart {
        background: #ff8eb3;
        border: 1px solid #ff8eb3;
        width: 350px;
        height: 350px;
        position: absolute;
        transform: rotate(90deg);
        top: -50%;
        border-radius: 50%;
        z-index: 9;
      }
    }
  }
}
._active {
  animation: rotate 1s infinite ease;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>

