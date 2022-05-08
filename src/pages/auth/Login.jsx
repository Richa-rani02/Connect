import React from 'react'
import "./auth.scss";
import { Link } from 'react-router-dom';
import {InputBox} from "../../components/index";
export default function Login() {
  return (
    <div className="login-page">
      <div className="grid-item1 flex-center">
        <div className="img-container">
          <img src="../Assets/heroimg.png" className="responsive-img"></img>
        </div>
        <img src="../Assets/stars.svg" className="star"></img>
      </div>
      <div className="grid-item2 px-0-75 mt-1-5 flex-col flex-center">
        <div className="logo">
          <img src="../Assets/logosm.png"/>
        </div>
        <h2 className="login-page__login-title">Welcome to connect ...</h2>
        <div className="error-msg mt-1 px-0-75 py-0-5">
          Error in login
        </div>
        <form className="auth-form mt-1">
          <InputBox/>
          <InputBox/>
          <Link to="/signup" className="mt-1 signup-link">New user ? SignUp here</Link>
         <button className="auth-form__auth-btn login-btn py-0-75 mt-2">
          Login
         </button>
         <div className="m-1 test-login">Load test credential</div>
        </form>
      </div>
    </div>
  )
}
