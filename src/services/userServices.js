import axios from "axios";
import { userUrl } from "../utils/apiUrl";
export const getAllUserServices = () => axios.get(userUrl);

export const getUserServices = (userId) => axios.get(`/api/users/${userId}`);
export const getUserHandlerServices = (userHandler) => axios.get(`/api/users/${userHandler}`);
export const updateUserServices = (token, userData) => {
    return axios.post("/api/users/edit", {
       userData: userData,
    }, {
        headers: {
            authorization: token,
        }
    });
};

export const followUserServices = (token, userId) => {

    return axios.post(`/api/users/follow/${userId}`, {}, {
        headers: {
            authorization: token,
        }
    })
}
export const unfollowUserServices = (token, userId) => {
    return axios.post(`/api/users/unfollow/${userId}`, {}, {
        headers: {
            authorization: token,
        }
    })
}