import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        isSignup:false,
        userEmail:'',
    },
    reducers:{
        checkIsLogin:(state,action)=>{
            state.isSignup = action.payload;
            state.userEmail = action.payload
        }
    }
})

export const {checkIsLogin} = userSlice.actions;
export default userSlice.reducer;