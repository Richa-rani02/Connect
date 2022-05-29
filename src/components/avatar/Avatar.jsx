import { useNavigate } from "react-router-dom";
import "./Avatar.scss";
export const Avatar=({details,className=''})=>{
    const navigate=useNavigate();
    return (
        <div className={`profileImg-container ${className}`} onClick={()=>navigate('/profile')}>
         <img src={details?.profileImg} className="responsive-img"></img>
         </div>
    )
}