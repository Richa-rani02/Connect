import { useSelector } from "react-redux";
import "./comment.scss";
import { BsThreeDots } from "../../utils/icons";
export const Comment = ({ comment }) => {
    const { allUsers } = useSelector((state) => state.user);
    const userInfo = allUsers && allUsers?.find((user) => user.username === comment.username);
    return (
        <div className="replies flex flex-align-center p-0-75">
            <span className="replies__img">
                <img src={userInfo?.profileImg} className="responsive-img" />
            </span>
            <span className="replies__text-container px-0-5 py-0-25 flex flex-col ">
                <div className="flex">
                    <h4>{userInfo?.firstName.concat(" ", userInfo?.lastName)}</h4>
                    <span className="comment_edit flex-center">
                        <BsThreeDots size={20} onClick="{() => setOpenOption((val) => !val)}" />
                        {/* <span className={`rightspan__items flex-col py-1 px-0-5${openOption ? ' active ' : ''}`}>
                            <li className="flex flex-align-center" onClick={editModalToogle} >
                                <BiCommentEdit size={24} style={{ color: '#4f46e5' }} />
                            </li>
                            <li className="flex flex-align-center">
                                <MdDeleteOutline size={24} style={{ color: '#4f46e5' }} onClick={deletePostHandler} />
                            </li>
                        </span> */}
                    </span>

                </div>

                <p>{comment.text}</p>
            </span>
        </div>
    )
}