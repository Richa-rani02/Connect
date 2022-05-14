import "./navbar.scss";
import {useNavigate} from "react-router-dom";
import {FaUserCircle,BsSearch,MdNotifications,BsFillChatLeftDotsFill} from "../../utils/icons";
export const Navbar=()=>{
    let navigate=useNavigate();
    return(
        <header className="header flex flex-align-center flex-justify-between w-100 py-0-75 px-2">
         <div className="app-title flex flex-align-center">
             <img src="../Assets/logosm.png" className="app-title__logo">
             </img>
         </div>
         {/* <form action="" className="search-form flex">
             <span className="search-form__icon px-1 flex flex-align-center">
             <BsSearch />
             </span>
        <input type="search" className="search-form__input" value=""placeholder="search here..."/>
      </form> */}
    
         <div className="profile-container" onClick={()=>navigate('/profile')}>
         <img src="../Assets/avatar3.png" className="responsive-img"></img>
         </div>
        </header>
    )
}