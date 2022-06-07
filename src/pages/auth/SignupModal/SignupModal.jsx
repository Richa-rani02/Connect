import "../auth.scss";
import { Modal, InputBox,AvatarModal } from "../../../components/index";
import { ImSpinner3 } from "../../../utils/icons";
import { SignupUser } from "../authSlice";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const SignupModal = ({ isOpen, onClose }) => {
  const [avatarActive, setAvatarActive] = useState(false);
  const handleAvatarToogle = () =>{
    setAvatarActive((prev) => !prev);
  } 
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    fullName: ""
  });
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {isLoading,token,error}=useSelector((state)=>state.auth);
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const errorMsg =
  error === ""
      ? ""
      : error.includes('422')
      ? "Unprocessable Entity. Username Already Exists."
      : "Signup failed!"

console.log(token);
  const{fullName,email,password}=formValues;
  const signupHandler = () => {
    errorMsg=='';
    if (
      fullName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      dispatch(SignupUser(formValues))
    }
  }


            // useEffect(()=>token && setAvatarActive(true),[token]);
             useEffect(() => token && navigate("/feed"), [token]);
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="px-0-25 flex-col flex-center">
        <div className="logo">
          <img src="../Assets/logosm.png" />
        </div>
        <h2 className="login-page__login-title">Signup</h2>
        {errorMsg? <div className="error-msg mt-1 px-0-75 py-0-5">
         {errorMsg}
        </div>:null}
        
        <form className="signup-form mt-1" onSubmit={e=>e.preventDefault()}>
          <InputBox labelName="Name" type="text" name="fullName" value={formValues.fullName} onChange={changeHandler} required />
          <InputBox labelName="Email" type="email" name="email" value={formValues.email} onChange={changeHandler} required />
          <InputBox labelName="Password" type="password" name="password" value={formValues.password} onChange={changeHandler} required />
          <div className="mt-1 signup-link" onClick={onClose}>Already registered ?Login </div>
          <button className="auth-btn-group auth-btn py-0-75 mt-2 flex-center" onClick={signupHandler} disabled={isLoading}>
            {isLoading && <ImSpinner3 size={20} className="spinner mr-0-5" />}
            Signup
          </button>
        </form>
      </div>
    </Modal>
     {avatarActive ? <AvatarModal isOpen={avatarActive} onClose={handleAvatarToogle} /> : null}
     </>
  )
}