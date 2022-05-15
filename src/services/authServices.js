import axios from 'axios';
import { loginUrl,signupUrl } from '../utils/apiUrl';

export const loginService=(userDetails)=>{
    return axios.post(loginUrl,{
        username:userDetails.email,
        password:userDetails.password,
    });
}

export const signupService=(userDetails)=>{
    return axios.post(signupUrl,{
        firstName:userDetails.firstName,
            lastName:userDetails.lastName,
            email: userDetails.email,
            password: userDetails.password
    });
}