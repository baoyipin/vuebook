<template>
    <div class="box">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-chazhaobiaodanliebiao"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-tianjiajiahaowubiankuang"></i>
        <span>添加</span>
      </router-link>
    </div>
</template>
<script>
    export default {
        data() {
          return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .box{
    position: fixed;
    left: 0;
    height: 50px;
    width: 100%;
    bottom:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
    background: #cccccc;
    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #2a2a2a;
    }
    .router-link-active{
      color: green;
    }
  }
</style>
