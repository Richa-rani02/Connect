import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../pages/auth/authSlice";
import { postReducer } from "../redux/postSlice";
import { userReducer } from "../pages/profile/userSlice";
export const store=configureStore({
    reducer:{
        auth:authReducer,
        post:postReducer,
        user:userReducer,
    }
})

