import axios from "axios";
import { bookmarkUrl } from "../utils/apiUrl";

export const getBookmarkServices=(token)=>axios.get(bookmarkUrl,{
    headers:{
        authorization:token
    },
});

export const addBookmarkServices=(token,postId)=>{
    return axios.post(`/api/users/bookmark/${postId}`,{},{
       headers:{
           authorization:token
       }
    });
}

export const removeBookmarkServices=(token,postId)=>{
return axios.post(`/api/users/remove-bookmark/${postId}`,{},{
    headers:{
        authorization:token
    }
});
}