import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../pages/auth/authSlice";
import { postReducer } from "../pages/Feed/postSlice";
export const store=configureStore({
    reducer:{
        auth:authReducer,
        post:postReducer,
    }
})

