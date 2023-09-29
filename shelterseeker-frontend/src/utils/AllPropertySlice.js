import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
    name:'properties',
    initialState:{
        propertiesArray:[],
    },
    reducers:{
        getProperties:(state,action)=>{
            state.propertiesArray = action.payload;
        }
    }
})

export const {getProperties} = propertySlice.actions;
export default propertySlice.reducer;