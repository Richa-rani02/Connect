import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPostService, getUserPostService, addPostService, deletePostService } from "../../services";

const initialState = {
    postStatus:'idle',
    isLoading:false,
    allPosts: [],
    userPosts: [],
}

export const getAllPost = createAsyncThunk(
    "post/getAllPost", async (_, { rejectWithValue }) => {
        try {
            const data = await getAllPostService();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    })

export const getUserPost = createAsyncThunk("post/getUserPost", async (userName, { rejectWithValue }) => {
    try {
        const data = await getUserPostService(userName);
        return data.posts;

    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const addPost = createAsyncThunk("post/addPost", async (postData, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("connect-token");
        const data = await addPostService(postData, token);
        return data.posts;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
export const deletePost = createAsyncThunk("post/deletePost", async (postId, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("connect-token");
        const data = await deletePostService(postId, token);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllPost.pending,(state)=>{
           state.postStatus="pending";
           state.isLoading=true;
        })
        .addCase(getAllPost.fulfilled,(state,action)=>{
            state.postStatus="fulfilled";
            state.isLoading=false;
            state.allPosts=action.payload.posts;
        })
        .addCase(getAllPost.rejected,(state)=>{
            state.postStatus="rejected";
            state.isLoading=false;
            state.allPosts=action.payload
        })
        .addCase(getUserPost.pending,(state)=>{
            state.postStatus="pending";
            state.isLoading=true;
        })
        .addCase(getUserPost.fulfilled,(state,action)=>{
            state.postStatus="fulfilled";
            state.isLoading=false;
            state.userPosts=action.payload;
        })
        .addCase(getUserPost.rejected,(state,action)=>{
            state.postStatus="rejected";
            state.isLoading=false;
            state.allPosts=action.payload;
        })

        .addCase(addPost.pending,(state)=>{
            state.postStatus="pending";
            state.isLoading=true;
        })
        .addCase(addPost.fulfilled,(state,action)=>{
           state.postStatus="fulfilled";
           state.isLoading=false;
           state.allPosts=action.payload;
        })
        .addCase(addPost.rejected,(state,action)=>{
            state.postStatus="rejected";
            state.isLoading=false;
            state.allPosts=action.payload;
         })
         .addCase(deletePost.pending,(state)=>{
            state.postStatus="pending";
            state.isLoading=true;
        })
        .addCase(deletePost.fulfilled,(state,action)=>{
           state.postStatus="fulfilled";
           state.isLoading=false;
           state.allPosts=action.payload;
        })
        .addCase(deletePost.rejected,(state,action)=>{
            state.postStatus="rejected";
            state.isLoading=false;
            state.allPosts=action.payload;
         })
    }
    })

    export const postReducer=postSlice.reducer;  