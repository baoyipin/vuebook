<template>
    <div class="header">
      <i class="iconfont icon-fanhui" v-if="back" @click="goback"></i>
      <span><slot></slot></span>
    </div>
</template>
<script>
    export default {
      props:{
        back:{
          type:Boolean,
          default:false
        }
      },
      methods:{
        goback(){
          this.$router.go(-1);
        }
      },
        data() {
          return {}
        }
    }
</script>
<style scoped lang="less">
  .header{
    position: fixed;
    top: 0;
    left:0;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: lightskyblue;
    border-bottom: 1px solid #ccc;
    i{
      position: absolute;
      left: 10px;
      height: 50px;
      line-height: 50px;
    }
    span{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
