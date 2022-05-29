import "./navbar.scss";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import {Avatar} from "../index";
export const Navbar=()=>{
    let navigate=useNavigate();
    const {userDetails}=useSelector((state)=>state.auth);
    return(
        <header className="header flex flex-align-center flex-justify-between w-100 py-0-75 px-2">
         <div className="app-title flex flex-align-center">
             <img src="../Assets/logosm.png" className="app-title__logo">
             </img>
         </div>
         <Avatar details={userDetails} className="md"/>
        </header>
    )
}