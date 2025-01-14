import { createSlice } from '@reduxjs/toolkit'
const initialState={
    carts:[]
}

//card slice

const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        //add to cart


        addToCart:(state, action)=>{
            const Itemindex = state.carts.findIndex((item)=> item.id === action.payload.id)
            console.log(Itemindex)
//state.carts=[...state.carts, action.payload]
if(Itemindex>=0){
    state.carts[Itemindex].qnty +=1
}else{
    const temp = {...action.payload, qnty:1}
    state.carts=[...state.carts,temp]
}

        },
        //remove particular items
        removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts= data
        },
        //remove single items

removeSingleItems: (state,action)=>{
    const Itemindex_dec = state.carts.findIndex((item)=> item.id=== action.payload.id);
    if(state.carts[Itemindex_dec].qnty>=1){
        state.carts[Itemindex_dec].qnty -= 1
    }
  },

  //clear cart
  emptycartItem: (state,action)=>{
    state.carts = [] 
  }
    }
});

export const {addToCart, removeToCart,removeSingleItems,emptycartItem}= cartSlice.actions;
export default cartSlice.reducer;