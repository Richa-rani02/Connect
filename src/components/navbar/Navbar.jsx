import "./navbar.scss";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
export const Navbar=()=>{
    let navigate=useNavigate();
    const {userDetails}=useSelector((state)=>state.auth);
    return(
        <header className="header flex flex-align-center flex-justify-between w-100 py-0-75 px-2">
         <div className="app-title flex flex-align-center">
             <img src="../Assets/logosm.png" className="app-title__logo">
             </img>
         </div>
         <div className="profile-container" onClick={()=>navigate('/profile')}>
         <img src={userDetails.profileImg} className="responsive-img"></img>
         </div>
        </header>
    )
}