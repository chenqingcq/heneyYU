<template>
    <div class="tab-container">
        <div :class="{_active:index == currentIndex?true:false}"  v-for="(item,index) in items" :key="index" @click="changeIndex(index)">
            {{item.info}}
        </div>
    </div>
</template>
<script>
export default {
  name: "tab",
  data() {
    return {
      items: [
        { info: "Y" },
        { info: "U" },
        { info: "LOVE" },
        { info: "Y" },
        { info: "U" }
      ],
      currentIndex: 0
    };
  },
  computed: {},
  methods: {
    changeIndex(index){
        this.currentIndex = index;
        switch (index){
            case 0 : {
                this.$router.push('/index')
                break
            }
             case 1 : {
                this.$router.push('/about')
                break
            }
             case 2 : {
                this.$router.push('/story')

                break
            }
             case 3 : {
                this.$router.push('/honey')

                break
            }
            default :{
                this.$router.push('/detail')
            }
        }
    }
  }
};
</script>
<style lang='less' scoped>
.active{
    // animation: zoom .5s ease; 
}
@keyframes zoom {
    0%{
        color: #00a1d6  ;
        opacity: .8;
        transform: scale(.8,.8);
    }
    50%{
        color:#DA5380 ;
        opacity: 1.2;
        transform: scale(1.2,1.2);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    100%{
        opacity: 1;
        transform: scale(1,1);
    }
}
.tab-container {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 80px !important;
  width: 100vw;
  div {
    flex: 1;
    height: 100%;
    text-align: center;
    line-height: 90px;
    font-size: 28px;
    // color: #DA5380;
    color: #fff;
    font-weight: 600;
    border-top: 1px solid #00a1d6;
    border-right: 1px solid #00a1d6;
    background-color: rgba(158, 234, 106, 0.5);
    font-family: PingFang SC;
    &:nth-of-type(1){
        background: url('../../assets/img/love02.png')no-repeat center ;
        background-size: 100% 100%;
        
    };
    &:nth-of-type(2){
        background: url('../../assets/img/love02.png')no-repeat center ;
        background-size: 100% 100%;

    };
    &:nth-of-type(3){
        background: url('../../assets/img/love02.png') no-repeat center;
        background-size: 100% 100%;
    };
    &:nth-of-type(4){
        background: url('../../assets/img/love02.png') no-repeat center;
        background-size: 100% 100%;
    };
    &:nth-of-type(5){
        background: url('../../assets/img/love02.png') no-repeat center;
        background-size: 100% 100%;
    };
  }
}
</style>

