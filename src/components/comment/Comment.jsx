import { useSelector } from "react-redux";
import "./comment.scss";
export const Comment=({comment})=>{
    const { allUsers } = useSelector((state) => state.user);
    const userInfo = allUsers && allUsers?.find((user) => user.username === comment.username);
    return(
        <div className="replies flex flex-align-center p-0-75">
        <span className="replies__img">
            <img src={userInfo?.profileImg} className="responsive-img"/>
        </span>
        <span className="replies__text-container px-0-5 py-0-25 flex flex-col ">
            <h4>{userInfo?.firstName.concat(" ", userInfo?.lastName)}</h4>
            <p>{comment.text}</p>
        </span>
    </div>
    )
}