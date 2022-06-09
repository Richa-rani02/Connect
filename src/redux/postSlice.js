import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
    doc,
    setDoc,
    addDoc,
    collection,
    query,
    where,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    arrayUnion,
    arrayRemove,
} from "firebase/firestore";
import { db, auth } from "../firebase/config";

let toastId;
const initialState = {
    posts: [],
    error: "",
    statusAddPost: "idle",
    statusAllPost: "idle",
    statusEditPost: "idle",
    statusDeletePost: "idle",
    statusLikePost: "idle",
    statusDislikePost: "idle",
}

export const addPost = createAsyncThunk("post/addPost", async (postData,{rejectWithValue}) => {
    console.log(postData);
    try {
      const postRef = await addDoc(collection(db, "posts"), {
        ...postData,
        likes: [],
        comments:[],
      });
      await updateDoc(postRef, { id: postRef.id });
      const postSnap = await getDoc(postRef);
      const post = postSnap.data();
      const userSnap = await getDoc(doc(db, "users", post.userId));
      return { ...post, id: postSnap.id, user: userSnap.data() };
    } catch (error) {
      return rejectWithValue(error);
    }
  });

  const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:{
        [addPost.pending]: (state, action) => {
            state.statusAddPost = "loading";
            state.error = "";
            // toastId = toast.loading("creating account...");

        },
        [addPost.fulfilled]: (state, action) => {
            state.statusAddPost = "Success";
            state.posts.unshift(action.payload);
            // toast.success("Account created successfully", {
            //     id: toastId,
            // });
        },
        [addPost.rejected]: (state, action) => {
            state.statusAddPost = "failed";
            state.error = action.payload;
            // toast.error("Some error occured in Signup. Try Again:(", {
            //     id: toastId,
            // });

        }, 
    }

    })

    export const postReducer=postSlice.reducer;  