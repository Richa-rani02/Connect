import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPostService, getUserPostService, addPostService, deletePostService,addBookmarkServices,removeBookmarkServices,addLikedServices,dislikeServices} from "../services";
import toast from "react-hot-toast";
const initialState = {
    postStatus:'idle',
    isLoading:false,
    allPosts: [],
    userPosts: [],
}

export const getAllPost = createAsyncThunk(
    "post/getAllPost", async (_, { rejectWithValue }) => {
        try {
            const {data} = await getAllPostService();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    })

export const getUserPost = createAsyncThunk("post/getUserPost",
 async (username, { rejectWithValue }) =>
 {
    try {
        const {data} = await getUserPostService(username);
        return data.posts;

    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const addPost = createAsyncThunk("post/addPost", async (postData, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("connect-token");
        const {data} = await addPostService(postData, token);
        console.log(data);
        return data.posts;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
export const deletePost = createAsyncThunk("post/deletePost", async (postId, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("connect-token");
        const {data} = await deletePostService(postId, token);
        console.log(data.posts);
        return data.posts;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const addRemoveBookmark=createAsyncThunk("post/addRemoveBookmark",async({postId,doBookmark},{rejectWithValue})=>{
    try{
        const token=localStorage.getItem("connect-token");
        const {data}=doBookmark
        ? await addBookmarkServices(token,postId)
        :await removeBookmarkServices(token,postId)

        return data.posts;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const LikeDislike=createAsyncThunk("post/likeDislike",async({postId,doLike},{rejectWithValue})=>{
    try{
        const token=localStorage.getItem("connect-token");
        const {data}=doLike
        ?await addLikedServices(token,postId)
        :await dislikeServices(token,postId)

       return data.posts; 
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        let toastId;
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
           console.log(action.payload);
           toast.success("Post added !!", {
            id: toastId,
        });
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
           toast.success("Post deleted !!", {
            id: toastId,
        });
        })
        .addCase(deletePost.rejected,(state,action)=>{
            state.postStatus="rejected";
            state.isLoading=false;
            state.allPosts=action.payload;
            toast.error("Some error occured in login. Try Again:( ", {
                id: toastId,
            });
         })
  //bookmark
         .addCase(addRemoveBookmark.pending,(state)=>{
            state.postStatus="pending";
            state.isLoading=true;
        })
        .addCase(addRemoveBookmark.fulfilled,(state,action)=>{
           state.postStatus="fulfilled";
           state.isLoading=false;
           state.allPosts=action.payload;
           toast.success("Post Bookmarked !!", {
            id: toastId,
        });
        })
        .addCase(addRemoveBookmark.rejected,(state,action)=>{
            state.postStatus="rejected";
            state.isLoading=false;
            state.allPosts=action.payload;
            toast.error("Some error occured in login. Try Again:( ", {
                id: toastId,
            });
         })
//likes
         .addCase(LikeDislike.pending,(state)=>{
            state.postStatus="pending";
            state.isLoading=true;
        })
        .addCase(LikeDislike.fulfilled,(state,action)=>{
           state.postStatus="fulfilled";
           state.isLoading=false;
           state.allPosts=action.payload;
           toast.success("Post deleted !!", {
            id: toastId,
        });
        })
        .addCase(LikeDislike.rejected,(state,action)=>{
            state.postStatus="rejected";
            state.isLoading=false;
            state.allPosts=action.payload;
            toast.error("Some error occured in login. Try Again:( ", {
                id: toastId,
            });
         })
    }
    })

    export const postReducer=postSlice.reducer;  