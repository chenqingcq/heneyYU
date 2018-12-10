<template>
    <div class="modal-container">
        <header>{{title}}</header>
        <section>中部</section>
        <footer>脚</footer>
    </div>
</template>
<script>
    export default {
        name:"modal",
        props:{
            title:{
                type:String,
                default:"标题"
            }
        }
    }
</script>   
<style scoped lang='less'>
    .modal-container{
        position: absolute;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
    }
</style>