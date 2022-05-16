import "./postcard.scss";
import {useSelector } from "react-redux";
import { BsThreeDots, AiOutlineHeart, BsShareFill, BsBookmark, FaRegCommentDots, BsEmojiSmile } from "../../utils/icons";
export const Postcard = ({ post }) => {
    
    const { allUsers } = useSelector((state) => state.user);
     const userInfo = allUsers && allUsers?.find((user) => user.username === post.username);
    return (
        <div className="postcard mb-1-5 p-0-25">
            <div className="postcard__header flex flex-align-center">
                <div className="leftspan flex px-0-75">
                    <span className="profile">
                        <img src={userInfo?.profileImg} className="responsive-img"></img>
                    </span>
                    <span className="flex flex-align-center">
                        <h4>{userInfo?.firstName.concat(" ",userInfo?.lastName)}</h4>
                        <p>@{userInfo?.userHandler}</p>
                    </span>
                </div>
                <span className="rightspan px-0-5">
                    <BsThreeDots size={22} />
                </span>
            </div>
            <div className="postcard__content p-0-25">
                <p>{post.content}</p>
            </div>
            <div className="postcard__footer my-0-75 flex px-0-25">
                <span className="footer-left flex flex-align-center">
                    <FaRegCommentDots size={23} />
                    <AiOutlineHeart size={23} />
                    <BsShareFill size={20} />
                </span>
                <span className="footer-right">
                    <BsBookmark size={21} />
                </span>
            </div>
            {/* <div className="postcard__comments flex flex-align-center p-0-75">
                <span>
                    <BsEmojiSmile size={21} />
                </span>
                <input type="text" placeholder="Add a comment..." >
                </input>
                <button className="comment-btn">
                    Post
                </button>
            </div> */}
        </div>
    )
}