import axios from "axios";
import {userUrl} from "../utils/apiUrl";
export const getAllUserServices=()=>axios.get(userUrl);
export const getUserServices=(userId)=>axios.get(`/api/users/${userId}`);