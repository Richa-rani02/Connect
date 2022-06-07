import { useNavigate } from "react-router-dom";
import "./Avatar.scss";
export const Avatar = ({ details, className = ''}) => {
    const navigate = useNavigate();
    return (
        <div className={`profileImg-container ${className}`} onClick={() => navigate(`/profile/${details?.userHandler}`)}>
            <img src={details?.profileImg || details?.firstName?.charAt(0) } alt="not found" className="responsive-img"></img>
        </div>
    )
}