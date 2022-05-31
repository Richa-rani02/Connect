import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserServices,getUserHandlerServices, followUserServices, unfollowUserServices} from "../../services/index";
import { updateUser } from "../auth/authSlice";
const initialState = {
    userStatus: "idle",
    allUsers: [],
}

export const getAllUsers = createAsyncThunk("users/getAllUsers", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getAllUserServices();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

// export const getUserByHandler = createAsyncThunk("users/getUserByHandler", async (userHandler, { rejectWithValue }) => {
//     try {
//         const { data } = await getAllUserServices(userHandler);
//         return data;
//     } catch (error) {
//         return rejectWithValue(error.message);
//     }
// })
export const followUnfollowUser = createAsyncThunk("users/followUnfollow", async ({ userId, dispatch, isFollowing }, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("connect-token");
        const {data} = isFollowing
            ? await (unfollowUserServices(token, userId))
            : await (followUserServices(token, userId))

       dispatch (updateUser(token,data.user));
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.userStatus = "pending"
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.userStatus = "fulfilled";
                state.allUsers = action.payload.users;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.userStatus = "rejected";
                state.allUsers = action.payload;
            })
            // .addCase(getUserByHandler.pending, (state) => {
            //     state.userStatus = "pending"
            // })
            // .addCase(getUserByHandler.fulfilled, (state, action) => {
            //     state.userStatus = "fulfilled";
            //     state.allUsers = action.payload.users;
            // })
            // .addCase(getUserByHandler.rejected, (state, action) => {
            //     state.userStatus = "rejected";
            //     state.allUsers = action.payload;
            // })
            .addCase(followUnfollowUser.pending, (state) => {
                state.userStatus = "pending"
            })
            .addCase(followUnfollowUser.fulfilled, (state, action) => {
                state.userStatus = "fulfilled";
                 state.allUsers = [...state.allUsers].map((user)=>{
                     if(action.payload.followUser.username===user.username){
                         return action.payload.followUser;
                     }
                     return user;
                 });
            })
            .addCase(followUnfollowUser.rejected, (state, action) => {
                state.userStatus = "rejected";
                 state.allUsers = action.payload;
            })

    }
})

export const userReducer = userSlice.reducer;