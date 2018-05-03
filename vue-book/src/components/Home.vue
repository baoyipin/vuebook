<template>
    <div>
      <Mheader>首页</Mheader>
      <Loading v-if="loading"></Loading>
      <div class="content" v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h2 style="margin: 5px 0;">热门图书</h2>
          <ul>
            <li v-for="hot in hotBooks">
              <img :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import Mheader from "../base/Mheader.vue";
  import Swiper from "../base/Swiper.vue";
  import Loading from "../base/Loading.vue";
  import {getAll} from "../api";
    export default {
        data() {
          return {sliders:[],hotBooks:[],loading:true}
        },
      created(){
          this.getData();
      },
        methods: {
        async getData(){
          let [sliders,hotBooks]=await getAll();
          this.sliders=sliders;
          this.hotBooks=hotBooks;
          this.loading=false;
        }
        },
        computed: {},
        components: {Mheader,Swiper,Loading}
    }
</script>
<style scoped lang="less">
  .content{
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    bottom:50px;
    .container{
      width: 90%;
      margin: 0 auto;
      ul{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        li{
          width: 50%;
          display: flex;
          flex-direction: column;
          margin: 10px 0;
          b{
            margin: 5px 0;
            text-align: center;
          }
        }
      }

    }
  }
</style>
