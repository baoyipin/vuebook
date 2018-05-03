<template>
    <div>
      <Mheader :back="true">添加</Mheader>
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
            <label for="bookCover">封面</label>
            <input type="text" v-model="book.bookCover" id="bookCover">
          </li>
          <li>
            <label for="bookprice">价格</label>
            <input type="text" v-model.number="book.bookPrice" id="bookprice">
          </li>
          <li><button @click="add">添加</button></li>
        </ul>
      </div>
    </div>
</template>
<script>
  import Mheader from "../base/Mheader.vue";
  import {addbook,getBooks} from "../api";
    export default {
        data() {
          return {book:{},books:[]}
        },
        async created(){
          this.books=await getBooks()
        },
        methods: {
          async add(){
            await addbook({...this.book,bookId:this.books.length+1});
            this.$router.push("/list");
          }
        },
        computed: {},
        components: {Mheader}
    }
</script>
<style scoped lang="less">
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
</style>
