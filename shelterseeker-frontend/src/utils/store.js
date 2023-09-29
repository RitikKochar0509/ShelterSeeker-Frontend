import { configureStore } from "@reduxjs/toolkit";
import propertySlice from './AllPropertySlice';
import userSlice from "./userSlice";
import filterPropertySlice from "./filterPropertySlice";

const store = configureStore({
    reducer:{
      properties:propertySlice,
      user:userSlice,
      filterData:filterPropertySlice
    }
})

export default store;