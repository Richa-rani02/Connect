import axios from 'axios';
import toast from "react-hot-toast";
import { loginUrl,signupUrl } from '../utils/apiUrl';

export const loginService=async(userDetails)=>{
    return await axios.post(loginUrl,{
        email:userDetails.email,
        password:userDetails.password,
    });
}

export const signupService=async(userDetails)=>{
    return await axios.post(signupUrl,{
        firstName:userDetails.firstName,
            lastName:userDetails.lastName,
            email: userDetails.email,
            password: userDetails.password
    });
}