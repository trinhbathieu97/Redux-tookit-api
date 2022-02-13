import { configureStore } from "@reduxjs/toolkit";
import TodoReduce from "./Reduce";
   
const store = configureStore({
    reducer:{
        todos : TodoReduce
    }
})

export default store