import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserServices} from "../../services/index";
const initialState = {
    userStatus: "idle",
    allUsers: [],
    userData:[],
}

export const getAllUsers = createAsyncThunk("users/getAllUsers", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getAllUserServices();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
export const getUser = createAsyncThunk("users/getUser", async (userId, { rejectWithValue }) => {
    try {
        const { data } = await getUserServices(userId);
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
            .addCase(getUser.pending, (state) => {
                state.userStatus = "pending"
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.userStatus = "fulfilled";
                state.userData = action.payload.users;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.userStatus = "rejected";
                state.userData = action.payload;
            })
            
    }
})

export const userReducer=userSlice.reducer;