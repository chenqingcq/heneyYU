
<template>
    <div @click="showModal" class="honey-container">
       
    </div>
</template>
<script>
import Toast from '@/base/toast/toast';
export default {
  data() {
    return {
      test: "测试",
      demo: "测试!",
      show: false,
      isShow: true,
      Show:true,
      userInput:'',
      toast:''
    };
  },
  methods:{
      showModal(){
          this.$modal()
      }
  },
  components:{
      Toast
  }
};
</script>
<style scoped lang='less'>
.honey-container {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/honey.png");
  background-size: cover;
  background-repeat: no-repeat no-repeat;
  div {
    width: 100%;
    color: #fff;
  }
  input{
      width: 100%;
  }
}
</style>

