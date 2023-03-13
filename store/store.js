import { configureStore } from "@reduxjs/toolkit";
import {favPackageSlice} from './npmSlice'


const store = configureStore({
    reducer:{
        favNPM: favPackageSlice.reducer
    }
})

export default store;