import * as Types from "./mutation-types";
const mutations={
  [Types.ADD_CART](state,book){
    let product=state.cartList.find(item=>item.bookId===book.bookId);
    if (product){
      product.bookCount+=1;
    }else {
      book.bookCount=1;
      state.cartList=[...state.cartList,book];
    }
  },
  [Types.INCREMENT_COUNT](state,id){
    state.cartList=state.cartList.filter(book=>{
      if (book.bookId===id){
        book.bookCount+=1;
      }
      return book;
    })
  },
  [Types.DECREMENT_COUNT](state,id){
   state.cartList=state.cartList.filter(book=>{
      if (book.bookId===id){
        book.bookCount--;
      }
      return book;
    })
  },
  [Types.REMOVE_CART](state,id){
    state.cartList=state.cartList.filter(book=>book.bookId!==id);
  },
  [Types.CLEAR_CART](state){
    state.cartList=[];
  }
};
export default mutations;
