import axios from 'axios';
import { loginUrl,signupUrl } from '../utils/apiUrl';

export const loginService=(userDetails)=>{
    return axios.post(loginUrl,{
        username:userDetails.email,
        password:userDetails.password,
    });
}

export const signupService=(userDetails)=>{
    const [firstName, lastName] = userDetails.fullName.split(' ');
    return axios.post(signupUrl,{
            firstName:firstName,
            lastName:lastName,
            username: userDetails.email,
            password: userDetails.password
    });
}