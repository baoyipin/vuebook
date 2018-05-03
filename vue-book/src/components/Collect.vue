<template>
    <div>
      <Mheader :back="true">购物车</Mheader>
      <ul class="content">
        <li v-for="book in $store.state.cartList">
          <img :src="book.bookCover">
          <p>价格:{{book.bookPrice}}</p>
          <div class="count">
            <button @click.stop="minus(book.bookId)">-</button>
            {{book.bookCount}}
            <button @click.stop="add(book.bookId)">+</button>
          </div>
          <button @click="removeCart(book.bookId)">删除</button>
        </li>

          <div class="bottom">
            <span class="clear" @click="clear">清空</span>
            <span>总计：{{$store.getters.total}}</span>
          </div>

      </ul>

    </div>
</template>
<script>
    import Mheader from "../base/Mheader.vue";
    import * as Types from "../store/mutation-types";
    export default {
        data() {
          return {}
        },
        methods: {
          add(id){
            this.$store.commit(Types.INCREMENT_COUNT,id);
          },
          minus(id){
            this.$store.commit(Types.DECREMENT_COUNT,id);
          },
          removeCart(id){
            this.$store.commit(Types.REMOVE_CART,id);
          },
          clear(){
            this.$store.commit(Types.CLEAR_CART);
          }
        },
        computed: {},
        components: {Mheader}
    }
</script>
<style scoped lang="less">
li{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  img{
    width: 100px;
    height: 120px;
  }
}
  .bottom{
    display: flex;
    justify-content: space-around;
    .clear{
      width: 50px;
      height: 30px;
      background: orangered;
      border-radius: 5px;
      line-height: 30px;
      text-align: center;
    }
  }
</style>
