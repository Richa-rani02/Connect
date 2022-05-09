import "../../pages/auth/auth.scss";
import {Modal,InputBox} from "../../components/index";
export const SignupModal=({isOpen,onClose})=>{
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
             <div className="px-0-25 flex-col flex-center">
        <div className="logo">
          <img src="../Assets/logosm.png"/>
        </div>
        <h2 className="login-page__login-title">Signup</h2>
        {/* <div className="error-msg mt-1 px-0-75 py-0-5">
          Error in Signup
        </div> */}
        <form className="signup-form mt-1">
          <InputBox labelName="Name" type="text" name="fullname" required />
          <InputBox labelName="Email" type="email" name="email" required/>
          <InputBox labelName="Password" type="password" name="password" required/>
          <div className="mt-1 signup-link" onClick={onClose}>Already registered ?Login </div>
         <button className="auth-btn-group auth-btn py-0-75 mt-2">
         Signup
         </button>
        </form>
      </div>
</Modal>
    )
}