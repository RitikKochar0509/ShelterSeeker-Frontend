import { createSlice } from "@reduxjs/toolkit";

const filterPropertySlice = createSlice({
    name:'properties',
    initialState:{
        name:'',
        city:'',
        price:'',
        
    },
    reducers:{
        applyFilter:(state,action)=>{
            state.name = action.payload;
            state.city=action.payload;
            state.price=action.payload;
        }
    }
})

export const {applyFilter} = filterPropertySlice.actions;
export default filterPropertySlice.reducer;