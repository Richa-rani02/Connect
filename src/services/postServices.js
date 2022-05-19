import axios from "axios";
import { PostUrl } from "../utils/apiUrl";

export const getAllPostService = () => axios.get(PostUrl);

export const getUserPostService = (username) =>
    axios.get(`/api/posts/user/${username}`);

export const addPostService = (postData, token) => {
    return axios.post(PostUrl, {
        postData
    }, {
        headers: {
            authorization: token,
        }
    })
}
export const editPostService = (postData, token,postId) => {
    return axios.post(`/api/posts/edit/${postId}`, {
        postData
    }, {
        headers: {
            authorization: token,
        }
    })
}
export const deletePostService = (postId, token) =>{
    console.log(postId,token);
    return axios.delete(`api/posts/${postId}`, {
        headers: {
            authorization: token,
        },
    });
}
