<template>
    <div class="toast-container">
        {{text}}
        <input @input="userInput" placeholder="测试" v-model="test"/>
    </div>
</template>
<script>
export default {
  name: "toast",
  data() {
    return {
      test: ""
    };
  },
  props: {
    text: String,
    default: "",
    validate(value) {
      console.log(value, "-----");
    }
  },
  methods: {
    userInput() {
      this.$emit("toastInput", this.test);
    }
  },
  mounted(){
      let arr = [1,2,3,4];
      let res = arr.sort(()=>{
          return (Math.random() - 0.5)
      });
    //   4*3*2*1 4!
      console.log(res)
  }
};
</script>