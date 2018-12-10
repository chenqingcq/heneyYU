
<template>
    <div class="story-container">
        <div class="vedio-container">
             <video ref="storyVedio" class="vedio" src="@/assets/mp4/1504110642167.mp4" 
                controls="controls" 
                autoplay="autoplay" >
            </video>
        </div>
        <div class="text-container">
            <p>YU</p>
            <p>你的过去我没有参与</p>
            <p>有你真好</p>
            <p>你在的每一天都是情人节!!!</p>
            <p>一生中最爱</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    if (to.path == "/story") {
      // this.$refs.storyVedio.play()
      next(vm => {
        vm.$nextTick(() => {
          let rootVedio = document.querySelector(".root-video");
          rootVedio && rootVedio.pause();
          vm.$refs.storyVedio.play();
        });
      });
    }
  }
};
</script>
<style scoped lang='less'>
.story-container {
  width: 100%;
  height: 100%;
  //   background: url("../assets/img/fyf.png");
  background-size: 100% 100%;
  background-repeat: no-repeat no-repeat;
  .vedio-container {
    width: 100%;
    video {
      width: 100%;
      height: 400px;
    }
  }
  .text-container {
    width: 100%;
    p {
      width: 100%;
      height: 50px;
      text-align: center;
      font-size: 40px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to right, blue, #da5380);
      -webkit-background-clip: text;
      color: transparent;
      margin-top: 10px;
      &:first-of-type {
        margin-top: 80px;
      }
    }
  }
}
</style>

