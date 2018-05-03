import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
Vue.use(Vuex);
const state={cartList:[]};
const getters ={
  total(state){
    let result=0;
    state.cartList.forEach(book=>{
      result+=book.bookCount*book.bookPrice;
    });
    return result;
  }
};
const store =new Vuex.Store({
  mutations,state,getters
});
export default store;
