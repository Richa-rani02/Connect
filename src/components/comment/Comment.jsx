import { useSelector } from "react-redux";
import "./comment.scss";
import {Avatar} from "../index";
import { BsThreeDots } from "../../utils/icons";
export const Comment = ({ comment }) => {
    const { allUsers } = useSelector((state) => state.user);
    const userInfo = allUsers && allUsers?.find((user) => user.username === comment.username);
    return (
        <div className="replies flex flex-align-center p-0-75">
            <Avatar details={userInfo} className="sm"/>
            <span className="replies__text-container px-0-5 py-0-25 flex flex-col ">
                <div className="flex">
                    <h4>{userInfo?.firstName.concat(" ", userInfo?.lastName)}</h4>

                </div>

                <p>{comment.text}</p>
            </span>
        </div>
    )
}