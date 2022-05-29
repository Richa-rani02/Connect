import "./postcard.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../pages/profile/userSlice";
import { deletePost, LikeDislike, addRemoveBookmark,addComment } from "../../redux/postSlice";
import { useEffect, useState } from "react";
import { EditPostModal, Comment,Avatar } from "../index";
import { BsThreeDots, BiCommentEdit, AiFillHeart, AiOutlineHeart, BsFillChatLeftDotsFill, BsBookmark, FaRegCommentDots, BsEmojiSmile, MdDeleteOutline, BsBookmarkFill } from "../../utils/icons";
export const Postcard = ({ post }) => {
    const {
        _id,
        content,
        pic,
        username,
        likes: { likeCount, likedBy, dislikedBy },
        comments,
    } = post;

    const [openOption, setOpenOption] = useState(false);
    const dispatch = useDispatch();
    const [commentblock, setCommentBlock] = useState(false);
    const { allUsers } = useSelector((state) => state.user);
    const { token, userDetails } = useSelector((state) => state.auth);
    const { bookmark,allPosts } = useSelector((state) => state.post)
    const userInfo = allUsers && allUsers?.find((user) => user.username === username);
    const isLiked = likedBy?.some((like) => like.username === userDetails.username);
    const isBookmarked = bookmark?.some((bookmarkpost) => bookmarkpost._id === _id);
    const [editModalActive, setEditModalActive] = useState(false);
    const [commentData,setCommentData]=useState("");


    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    const deletePostHandler = (e) => {
        e.preventDefault();
        dispatch(deletePost(_id, token));

    }
    const editModalToogle = () => {
        setEditModalActive(prev => !prev);
        setOpenOption(val => !val);
    }
    const bookmarkHandler = () => {
        dispatch(addRemoveBookmark({ postId: _id, doBookmark: isBookmarked ? false : true }))
    }
    const commentHandler = () => {
        setCommentBlock((val) => !val);
    }
    const likeHandler = () => {
        dispatch(LikeDislike({ postId: _id, doLike: isLiked ? false : true }))
    }

    const addCommentHandler=()=>{
      dispatch(addComment({postId:_id,commentData:commentData}));
    }
    return (
        <>
            <div className="postcard mb-1-5 p-0-25">
                <div className="postcard__header flex flex-align-center">
                    <div className="leftspan flex px-0-75">
                    <Avatar details={userInfo} className="md"/>
                        {/* <span className="profile">
                            <img src={userInfo?.profileImg} className="responsive-img"></img>
                        </span> */}
                        <span className="flex flex-align-center">
                            <h4>{userInfo?.firstName.concat(" ", userInfo?.lastName)}</h4>
                            <p>@{userInfo?.userHandler}</p>
                        </span>
                    </div>
                    {userDetails.username === post.username &&
                        <span className="rightspan px-0-5 flex-center">
                            <BsThreeDots size={22} onClick={() => setOpenOption((val) => !val)} />
                            <div className={`rightspan__items flex-col py-1 px-0-5${openOption ? ' active ' : ''}`}>
                                <li className="flex flex-align-center" onClick={editModalToogle} >
                                    <BiCommentEdit size={24} style={{ color: '#4f46e5' }} />
                                </li>
                                <li className="flex flex-align-center">
                                    <MdDeleteOutline size={24} style={{ color: '#4f46e5' }} onClick={deletePostHandler} />
                                </li>
                            </div>
                        </span>
                    }

                </div>
                <div className="postcard__content p-0-25">
                    <p>{content}</p>

                    {/* commented for further implementation */}

                    {/* {
                        pic &&
                        <div className="image_content">
                            <img className="responsive-img mt-0-25" src={pic} />
                        </div>
                    } */}
                </div>
                <div className="postcard__footer my-0-75 flex px-0-25">
                    <div className="footer-left flex flex-align-center">
                        <span className="flex-center" onClick={commentHandler}>
                            {comments?.length>0 ? <BsFillChatLeftDotsFill style={{ color: '#818cf8' }} size={22} /> : <FaRegCommentDots style={{ color: '#818cf8' }} size={23} />}
                            <span className="count ml-0-25">{comments?.length > 0 && `${comments?.length} ${comments?.length === 1 ? "comment" : "comments"}`}</span>
                        </span>
                        <span className="flex-center" onClick={() => likeHandler()}>
                            {isLiked ? <AiFillHeart style={{ color: '#818cf8' }} size={23} /> : <AiOutlineHeart style={{ color: '#818cf8' }} size={23} />}
                            <span className="count ml-0-25">{likeCount > 0 && `${likeCount} ${likeCount === 1 ? "Like" : "Likes"}`}</span>
                        </span>

                    </div>
                    <span className="footer-right">
                        {isBookmarked ? <BsBookmarkFill style={{ color: '#818cf8' }} size={21} onClick={() => bookmarkHandler()} /> :
                            <BsBookmark style={{ color: '#818cf8' }} size={21} onClick={() => bookmarkHandler()} />}
                    </span>
                </div>
                {commentblock && <>
                    <div className="postcard__comments flex flex-align-center p-0-75">
                        <span className="comment-img">
                            <img src={userInfo?.profileImg} className="responsive-img" />
                        </span>
                        <input type="text" placeholder="Add a comment..." onChange={(e)=>setCommentData(e.target.value)} />

                        <button className="comment-btn" onClick={addCommentHandler}>
                            Post
                        </button>
                    </div>
                    {comments?.map((comment) => (
                        <Comment key={comment._id} comment={comment} />
                    ))}

                </>}


            </div>

            {editModalActive ? <EditPostModal isOpen={editModalActive} onClose={() => setEditModalActive((val) => !val)} postData={post} userInfo={userInfo} /> : null}
        </>
    )
}