import axios from "axios";
import { PostUrl } from "../utils/apiUrl";

export const getAllPostService=()=> axios.get(PostUrl);
export const getUserPostService=(username)=>axios.get(`/api/posts/user/${username}`);
export const addPostService=(postData,token)=>{
    axios.post(PostUrl,{
        postData,
    },{
        headers:{
            authorization: token,
        }
    })
}
export const deletePostService=(postId,token)=>{
axios.delete(`api/posts/${postId}`,{
    headers:{
        authorization:token,
    },
})
}
