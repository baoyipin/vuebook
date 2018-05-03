<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from "./base/Tab.vue";
export default {
  name: 'App',
  components:{Tab}
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
 input,button{
   -webkit-appearance: none;
 }
  .content{
    position: absolute;
    top: 50px;
    bottom: 50px;
    left: 0;
    width: 100%;
    overflow: auto;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all .3s linear;
  }
  .fadeIn-leave-active{
    transition: all .3s linear;
    opacity: 0;
  }
</style>
