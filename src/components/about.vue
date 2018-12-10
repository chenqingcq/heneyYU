
<template>
    <div class="about-conatainer">
        <transition name="slowShow">
            <div v-if="isShow" class="text-container">
                <p>不需要说太多油腻的话语</p>
                <p>你就住在我心里</p>
                <p>永不分离</p>
                <p>原谅我不太会说漂亮的话</p>
                <p>内心早已笃定</p>
                <p>你--就是</p>
                <p>一生追随的</p>
                <p>那个伴</p>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.isShow = true;
    });
  },
  beforeRouteLeave(to, from, next) {
    next(vm => {
      setTimeout(() => {
        vm.isShow = false;
      }, 1500);
    });
  }
};
</script>
<style scoped lang = 'less'>
.slowShow-enter-active {
  animation: slowShow 1s ease;
}
.slowShow-leave-active {
  animation: slowShow 1s reverse;
}
@keyframes slowShow {
  0% {
    transform: translateX(-100%);
    color: aqua;
  }
  50% {
    transform: translateX(100%);
    color: #ff8eb3;
  }
  100% {
    color: #ff8eb3;
  }
}
.about-conatainer {
  width: 100%;
  height:calc(100% - 80px);
  object-fit: cover;
  background-image: url("../assets/img/yao7.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .text-container {
    width: 100%;
    height: 100%;
  }
  p {
    width: 100%;
    font-size: 40px;
    font-weight: 600;
    color: #ff8eb3;
    text-align: center;
  }
}
</style>

