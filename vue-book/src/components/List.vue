<template>
    <div>
      <Mheader>列表</Mheader>
      <div class="content" ref="scroll" @scroll="more">
        <ul>
          <router-link v-for="(book,index) in books"
                       :to="{name:'detail',params:{bid:book.bookId}}"
                       :key="index" tag="li">
            <div class="img">
              <img :src="book.bookCover">
            </div>
            <div class="right">
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>{{book.bookPrice}}</b>
              <div class="btn">
                <button @click.stop="remove(book.bookId)">删除</button>
                <button @click.stop="addCart(book)">添加</button>
              </div>
            </div>
          </router-link>
        </ul>
      </div>
      <Tab></Tab>
    </div>
</template>
<script>
  import Mheader from "../base/Mheader.vue";
  import Tab from "../base/Tab.vue";
  import {getBooks,removeBook,pagination} from "../api";
  import * as Types from "../store/mutation-types";
    export default {
        data() {
          return {books:[],hasmore:true,offset:0,isloading:false}
        },
      created(){
          this.getData();
      },
      mounted(){
        let scroll=this.$refs.scroll;
        let top=scroll.offsetTop;
        let isMove=false;
        scroll.addEventListener("touchstart",(e)=>{
          let startY=e.touches[0].pageY;
          let currentY,distance;
          let move=(e)=>{
            isMove=true;
            currentY=e.touches[0].pageY;
            distance=currentY-startY;
            if (distance>0){
              distance=distance>100?100:distance;
              if (scroll.scrollTop==0){
                scroll.style.top=top+distance+"px";
              }
            }
          };
          let end=(e)=>{
            if (!isMove)return;
            clearTimeout(this.scrollTimer);
            if (scroll.scrollTop==0){
              this.scrollTimer=setInterval(()=>{
                if (distance>0){
                  distance-=7;
                  scroll.style.top=top+distance+"px";
                }
              },50);
              this.books=[];
              this.offset=0;
              this.getData();
            }
            scroll.removeEventListener("touchmove",move);
            scroll.removeEventListener("touchend",end);
          };
          scroll.addEventListener("touchmove",move);
          scroll.addEventListener("touchend",end);
        })
      },
        methods: {
          addCart(book){
            this.$store.commit(Types.ADD_CART,book);
          },
          more(){
            clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
              let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
              if(scrollTop+clientHeight+30>=scrollHeight){
                this.getData();
              }
            },50);
          },
          async getData(){
            if(this.hasmore&&!this.isloading){
              this.isloading=true;
              let {hasmore,books}=await pagination(this.offset);
              this.books=[...this.books,...books];
              this.hasmore=hasmore;
              this.isloading=false;
              this.offset=this.books.length;
            }
          },
          async remove(id){
            await removeBook(id);
            this.books=this.books.filter(item=>item.bookId!==id);
          }
        },
        computed: {},
        components: {Mheader,Tab}
    }
</script>
<style scoped lang="less">
  .content{
   ul{
     width:100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     li{
       padding:10px 0;
       width: 90%;
       display: flex;
       justify-content: center;
       border-bottom: 1px solid #dfdfdf;
       .img{
         img{
           width: 110px;
           height: 120px;
         }
       }
       .right{
         .btn{
           display: flex;
           justify-content: space-around;
           margin-top: 10px;
         }
         p{
           text-overflow: ellipsis;
           width: 200px;
           height: 30px;
           line-height: 30px;
           white-space:nowrap;
           overflow: hidden;
         }
         button{
           display: block;
           width: 60px;
           height: 30px;
           background: orangered;
           border: none;
           border-radius: 5px;
           color: #fff;
           outline: none;
         }
       }
     }
   }
  }
</style>
