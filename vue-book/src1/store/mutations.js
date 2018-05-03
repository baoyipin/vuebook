import * as Types from "./mutation-types";
const mutations={
  [Types.INCREMENT](state,payload){
    state.count+=payload;
  },
  [Types.DECREMENT](state,payload){
    state.count-=payload;
  }
};
export default mutations;
