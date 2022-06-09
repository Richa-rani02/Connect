import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  query,
  orderBy,
  addDoc,
  collection,
  doc,
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
      console.log(error);
      return rejectWithValue(error.code);
    }
  });

  export const getAllPosts = createAsyncThunk("post/getAllPosts", async (_,{rejectWithValue}) => {
    try {
      const postQuery = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc")
      );
      let posts = [];
      const allPostsSnap = await getDocs(postQuery);
      for await (const post of allPostsSnap.docs) {
        const postData = post.data();
        const usersnap = await getDoc(doc(db, "users", postData.userId));
        posts = [...posts, { user: usersnap.data(), ...postData }];
      }
      return posts;
    } catch (error) {
      return rejectWithValue(error.code);
    }
  });

  export const editPost = createAsyncThunk("post/editPost", async (postData,{rejectWithValue}) => {
    // const newPostData = { ...postData };
    // delete newPostData.user;
    const postDataRef = doc(db, "posts", postData.id);
    try {
      await updateDoc(postDataRef, postData);
      const docRef = await getDoc(postDataRef);
      const editedData = { ...docRef.data(), id: postDataRef.id };
      return editedData;
    } catch (error) {
      return rejectWithValue(error.code);
    }
  });

  export const deletePost = createAsyncThunk(
    "post/deletePost",
    async (postId,{rejectWithValue}) => {
      console.log(postId);
      const postDeleteRef=doc(db, "posts", postId);
      try {
        await deleteDoc(postDeleteRef);
        return postDeleteRef.id;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:{
        [addPost.pending]: (state, action) => {
            state.statusAddPost = "loading";
            state.error = "";
             toastId = toast.loading("adding post...");

        },
        [addPost.fulfilled]: (state, action) => {
            state.statusAddPost = "Success";
            state.posts.unshift(action.payload);
            toast.success("Post added !!", {
                id: toastId,
            });
        },
        [addPost.rejected]: (state, action) => {
            state.statusAddPost = "failed";
            state.error = action.payload;
            console.log(action.payload);
            toast.error(`${action.payload}`, {
                id: toastId,
            });

        }, 
        [getAllPosts.pending]: (state, action) => {
          state.statusAllPost = "loading";
          state.error = "";

      },
      [getAllPosts.fulfilled]: (state, action) => {
          state.statusAllPost = "Success";
          state.posts=action.payload;
      },
      [getAllPosts.rejected]: (state, action) => {
          state.statusAllPost = "failed";
          state.error = action.payload;
          toast.error("Some error occured. Try Again:(", {
              id: toastId,
          });

      }, 
      [editPost.pending]: (state, action) => {
        state.statusEditPost = "loading";
        state.error = "";

    },
    [editPost.fulfilled]: (state, action) => {
        state.statusEditPost = "Success";
        state.posts = state.posts.map((post) =>post.id === action.payload.id ? { ...post, ...action.payload } : post);
        state.posts=action.payload;
        toast.success("Post updated", {
            id: toastId,
        });
    },
    [editPost.rejected]: (state, action) => {
        state.statusEditPost = "failed";
        state.error = action.payload;
        toast.error("Some error occured in updating post. Try Again:(", {
            id: toastId,
        });

    }, 
    [deletePost.pending]: (state, action) => {
      state.statusDeletePost = "loading";
      state.error = "";

  },
  [deletePost.fulfilled]: (state, action) => {
      state.statusDeletePost = "Success";
      state.posts=state.posts.filter((post)=>post.id!=action.payload);
      toast.success("post Deleted !!", {
          id: toastId,
      });
  },
  [deletePost.rejected]: (state, action) => {
      state.statusDeletePost = "failed";
      state.error = action.payload;

  }, 
    }

    })

    export const postReducer=postSlice.reducer;  