import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserServices} from "../../services/index";
import toast from "react-hot-toast";
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

// export const addRemoveBookmark=createAsyncThunk("post/addRemoveBookmark",async({postId,doBookmark},{rejectWithValue})=>{
//    console.log(postId,doBookmark);
//     try{
//         const token=localStorage.getItem("connect-token");
//         const {data}=doBookmark
//         ? await addBookmarkServices(token,postId)
//         :await removeBookmarkServices(token,postId)

//         console.log(data);
//         return data.bookmarks;
//     }catch(error){
//         return rejectWithValue(error.message);
//     }
// })

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        let toastId;
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
        //     //bookmark
        //  .addCase(addRemoveBookmark.pending,(state)=>{
        //     state.userStatus="pending";
        // })
        // .addCase(addRemoveBookmark.fulfilled,(state,action)=>{
        //    state.userStatus="fulfilled";
        //    state.allUsers=action.payload;
        //    toast.success("Post Bookmarked !!", {
        //     id: toastId,
        // });
        // })
        // .addCase(addRemoveBookmark.rejected,(state,action)=>{
        //     state.userStatus="rejected";
        //     state.isLoading=false;
        //     // /state.allUsers=action.payload;
        //     toast.error("Some error occured in login. Try Again:( ", {
        //         id: toastId,
        //     });
        //  })
    }
})

export const userReducer=userSlice.reducer;