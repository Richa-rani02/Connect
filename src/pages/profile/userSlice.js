import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserServices } from "../../services/index";
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
    }
})

export const userReducer=userSlice.reducer;