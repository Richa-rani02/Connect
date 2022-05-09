import React, { useState } from 'react'
import "./auth.scss";
import { InputBox } from "../../components/index";
import { SignupModal } from '../../components/index';
export default function Login() {

  const [signupActive, setSignupActive] = useState(false);
  const handleSignupToogle = () => setSignupActive((prev) => !prev);
  return (
    <>
      <div className="login-page">
        <div className="grid-item1 flex-center">
          <div className="img-container">
            <img src="../Assets/heroimg.png" className="responsive-img"></img>
          </div>
          <img src="../Assets/stars.svg" className="star"></img>
        </div>
        <div className="grid-item2 px-0-75 mt-1-5 flex-col flex-center">
          <div className="logo">
            <img src="../Assets/logosm.png" />
          </div>
          <h2 className="login-page__login-title">Welcome to connect ...</h2>
          <div className="error-msg mt-1 px-0-75 py-0-5">
            Error in login
          </div>
          <form className="auth-form mt-1">
            <InputBox labelName="Email" type="email" name="email" required />
            <InputBox labelName="Password" type="password" name="password" required />
            <div className="mt-1 signup-link" onClick={() => setSignupActive(true)}>New user ? SignUp here</div>
            <button className="auth-btn-group auth-btn py-0-75 mt-2">
              Login
            </button>
            <div className="m-1 test-login">Load test credential</div>
          </form>
        </div>
      </div>
      {signupActive ? <SignupModal isOpen={signupActive} onClose={handleSignupToogle} /> : null}
    </>
  )
}
