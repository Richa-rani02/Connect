import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signupService } from "../../services/index";
import toast from "react-hot-toast";
const initialState = {
    authStatus: '',
    isLoading: false,
    error: "",
    token: localStorage.getItem("connect-token") ?? "",
    userDetails: JSON.parse(localStorage.getItem("connect-user")) || "",
};

export const loginUser = createAsyncThunk(
    "auth/loginUser", async (userDetails, { rejectWithValue }) => {
        try {
            const { data } = await loginService(userDetails);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const SignupUser = createAsyncThunk(
    "auth/signupUser", async (userDetails, { rejectWithValue }) => {
        try {
            const { data } = await signupService(userDetails);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isLoading = false;
            state.error = "";
            state.token = "";
            state.userDetails = "";
            localStorage.removeItem("connect-token");
            localStorage.removeItem("connect-user");

        }
    },
    extraReducers: (builder) => {
        let toastId;
        builder
            .addCase(loginUser.pending, (state) => {
                state.authStatus = "pending";
                state.isLoading = true;
                state.error="";
                toastId = toast.loading("Logging in...");
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading=false;
                state.error="";
                state.token=action.payload.encodedToken;
                state.userDetails=action.payload.foundUser;
                localStorage.setItem("connect-token", state.token);
                localStorage.setItem("connect-user",JSON.stringify(state.userDetails) );
                toast.success(`Hello, ${state.userDetails.firstName}. Welcome back!`, {
                    id: toastId,
                    icon: "👋",
                });
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.isLoading=false;
                state.error=action.payload;
                toast.error("Some error occured in login. Try Again:( ", {
                    id: toastId,
                });
            })
            .addCase(SignupUser.pending,(state)=>{
                state.authStatus='pending';
                state.isLoading=true;
                state.error="",
                toastId = toast.loading("Creating new Account...");
            })
            .addCase(SignupUser.fulfilled,(state,action)=>{
                state.isLoading=false,
                state.error="",
                state.token=action.payload.encodedToken;
                state.userDetails=action.payload.createdUser;
                localStorage.setItem("connect-token", state.token);
                localStorage.setItem("connect-user",JSON.stringify(state.userDetails) );
                toast.success("Account created Successfully", {
                    id: toastId,
                });
            })
            .addCase(SignupUser.rejected,(state,action)=>{
                state.isLoading=false;
                state.error=action.payload;
                toast.error("Some error occured in signup. Try Again:( ", {
                    id: toastId,
                });
            })
    }

})
export const {logoutUser} =authSlice.actions;
export const authReducer=authSlice.reducer;
 
