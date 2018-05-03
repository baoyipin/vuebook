<template>
    <div class="detail">
      <Mheader :back="true">详情</Mheader>
      <div class="content">
        <ul class="box">
          <li>
            <label for="bookname">书名</label>
            <input type="text" v-model="book.bookName" id="bookname">
          </li>
          <li>
            <label for="bookinfo">简介</label>
            <input type="text" v-model="book.bookInfo" id="bookinfo">
          </li>
          <li>
            <label for="bookprice">价格</label>
            <input type="text" v-model.number="book.bookPrice" id="bookprice">
          </li>
          <li><button @click="update">修改</button></li>
        </ul>
      </div>
    </div>
</template>
<script>
  import Mheader from "../base/Mheader.vue";
  import {getOneBook,updateBook} from "../api";
    export default {
        data() {
          return {book:{}}
        },
        watch:{
          $route(){
            this.getOne(this.bid)
          }
        },
        methods: {
          async update(){
            await updateBook(this.bid,this.book);
            this.$router.push("/list");
          },
          async getOne(id){
            this.book=await getOneBook(id);
            Object.keys(this.book).length>0?void 0:this.$router.push("/list")
          }
        },
        created(){
          this.getOne(this.bid)
        },
        computed: {
          bid(){
            return this.$route.params.bid;
          }
        },
        components: {Mheader}
    }
</script>
<style scoped lang="less">
  .detail{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 10;
    .content{
      width: 100%;
      .box{
        width: 80%;
        margin: 20px auto;
        li{
          width: 100%;
          display: flex;
          flex-direction: column;
          label{
            height: 40px;
            line-height: 40px;
            font-size: 18px;
          }
          input{
            outline: none;
            border:1px solid #dfdfdf;
            height: 40px;
            width: 100%;
            font-size: 18px;
          }
          button{
            outline: none;
            border: none;
            background: lightskyblue;
            color: #fff;
            border-radius: 5px;
            font-size: 18px;
            width: 300px;
            height: 40px;
            margin: 10px auto;
          }
        }
      }
    }
  }
</style>
