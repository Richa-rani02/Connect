import "./postcard.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../pages/profile/userSlice";
import { deletePost } from "../../redux/postSlice";
import { useEffect, useState } from "react";
import { BsThreeDots, AiOutlineHeart, BsShareFill, BsBookmark, FaRegCommentDots, BsEmojiSmile, MdDeleteOutline } from "../../utils/icons";
export const Postcard = ({ post }) => {

    const [openOption, setOpenOption] = useState(false);
    const dispatch = useDispatch();
    const { allUsers } = useSelector((state) => state.user);
    const { token, userDetails } = useSelector((state) => state.auth);
    const userInfo = allUsers && allUsers?.find((user) => user.username === post.username);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    const deletePostHandler = () => {
        dispatch(deletePost(post._id, token));
    }

    return (
        <div className="postcard mb-1-5 p-0-25">
            <div className="postcard__header flex flex-align-center">
                <div className="leftspan flex px-0-75">
                    <span className="profile">
                        <img src={userInfo?.profileImg} className="responsive-img"></img>
                    </span>
                    <span className="flex flex-align-center">
                        <h4>{userInfo?.firstName.concat(" ", userInfo?.lastName)}</h4>
                        <p>@{userInfo?.userHandler}</p>
                    </span>
                </div>
                {userDetails.username === post.username &&
                    <span className="rightspan px-0-5 flex-center">
                        <BsThreeDots size={22} onClick={() => setOpenOption((val) => !val)} />
                        <div className={`rightspan__items px-2 py-0-5 flex flex-align-center${openOption ? ' active ' : ''}`} onClick={deletePostHandler}>
                            <MdDeleteOutline size={20} style={{ color: '#4f46e5' }} />
                            <p>Delete</p>
                        </div>
                    </span>
                }

            </div>
            <div className="postcard__content p-0-25">
                <p>{post.content}</p>
                {/* <div className="image_content">
                <img  className="responsive-img" src="https://res.cloudinary.com/dgomw715r/image/upload/v1650565396/ProjectImages/heroimg2_fha3p9.jpg"/>
                </div> */}
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
            <div className="postcard__comments flex flex-align-center p-0-75">
                <span>
                    <BsEmojiSmile size={21} />
                </span>
                <input type="text" placeholder="Add a comment..." >
                </input>
                <button className="comment-btn">
                    Post
                </button>
            </div>
        </div>
    )
}