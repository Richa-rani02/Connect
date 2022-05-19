import axios from "axios";

export const addLikedServices=(token,postId)=>{
return axios.post(`/api/posts/like/${postId}`,{},{
    headers:{
        authorization:token
    }
});
}
export const dislikeServices=(token,postId)=>{
return axios.post(`/api/posts/dislike/${postId}`,{},{
    headers:{
        authorization:token
    }
});
}