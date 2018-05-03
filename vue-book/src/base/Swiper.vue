<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src="slide"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  export default {
    name: 'carousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:2000
        }
      }
    },
    props:["swiperSlides"]
  }
</script>
<style>
  img{
    width: 100%;
  }
</style>
