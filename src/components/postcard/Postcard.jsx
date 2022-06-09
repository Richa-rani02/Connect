import "./postcard.scss";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../pages/profile/userSlice";
import { deletePost, LikeDislike, addRemoveBookmark, addComment } from "../../redux/postSlice";
import { useState,useRef } from "react";
import {Comment } from "../index";
import {CreatePost} from "../../pages/Feed/createPost/CreatePost";
import Avatar from "@mui/material/Avatar";
import { BsThreeDots, MdAddComment, BiCommentEdit, AiFillHeart, AiOutlineHeart, BsFillChatLeftDotsFill, BsBookmark, FaRegCommentDots, BsEmojiSmile, MdDeleteOutline, BsBookmarkFill } from "../../utils/icons";
export const Postcard = ({allPost}) => {
    const {
        id,
        createdAt,
        comments,
        likes,
        postPicUrl,
        postText,
        user,
        userId,
    } = allPost;
  const {token}=useSelector((state)=>state.auth);
  const dispatch=useDispatch();
     const [openOption, setOpenOption] = useState(false);
    //  const isEditing=useRef(false);
    // const dispatch = useDispatch();
     const [commentblock, setCommentBlock] = useState(false);
    // const { allUsers } = useSelector((state) => state.user);
    // const { token, userDetails } = useSelector((state) => state.auth);
    // const { bookmark, allPosts } = useSelector((state) => state.post)
    // const userInfo = allUsers && allUsers?.find((user) => user.username === username);
    // const isLiked = likedBy?.some((like) => like.username === userDetails.username);
    // const isBookmarked = bookmark?.some((bookmarkpost) => bookmarkpost._id === _id);
     const [editModalActive, setEditModalActive] = useState(false);
    // const [commentData, setCommentData] = useState("");

    const deletePostHandler = (e) => {
        e.preventDefault();
        dispatch(deletePost(id));

    }
    const editToogle = () => {
        setEditModalActive(true);
        setOpenOption(false);
    }
    // const bookmarkHandler = () => {
    //     dispatch(addRemoveBookmark({ postId: _id, doBookmark: isBookmarked ? false : true }))
    // }
    const commentHandler = () => {
        setCommentBlock((val) => !val);
    }
    // const likeHandler = () => {
    //     dispatch(LikeDislike({ postId: _id, doLike: isLiked ? false : true }))
    // }

    // const addCommentHandler = () => {
    //     dispatch(addComment({ postId: _id, commentData: commentData }));
    //     setCommentData("");
    // }
    return (
        <>
            <div className="postcard mb-1-5 px-0-5">
                <div className="postcard__header flex flex-align-center">
                    <div className="leftspan flex">
                    <Avatar sx={{ height: '52px', width: '52px', backgroundColor:'#818cf8'}} src={user?.profileImg || user?.firstName?.charAt(0)} alt={user?.firstName} />
                        <span className="flex flex-col">
                            <span className="flex user-detail">
                            <h4>{user?.firstName.concat(" ", user?.lastName)}</h4>
                            <p>@{user?.userName}</p>
                            </span>
                            <span>
                                <p className="post-date">{createdAt}</p>
                            </span>
                            
                        </span>
                    </div>
                    {userId === token &&
                        <span className="rightspan flex-center">
                            <BsThreeDots size={22} onClick={() => setOpenOption((val) => !val)} />
                            <div className={`rightspan__items flex-col py-0-25  ${openOption ? ' active ' : ''}`}>
                                <li className="flex flex-align-center" onClick={editToogle} >
                                    <BiCommentEdit size={24} style={{ color: '#4f46e5' }}/>
                                    Edit
                                </li>
                                <li className="flex flex-align-center" onClick={deletePostHandler}>
                                    <MdDeleteOutline size={24} style={{ color: '#4f46e5' }} />
                                    Delete
                                </li>
                            </div>
                        </span>
                    }

                </div>
                <div className="postcard__content flex flex-col">
                    {
                        postPicUrl &&
                        <div className="image_content">
                            <img className="responsive-img" src={postPicUrl} />
                        </div>
                    }
                      <p>{postText}</p>
                </div>
                <div className="postcard__footer flex py-0-5 px-0-75">
                    <div className="footer-left flex flex-align-center">
                        <span className="flex-center" onClick={commentHandler}>
                            {comments?.length > 0 ? <BsFillChatLeftDotsFill style={{ color: '#818cf8' }} size={22} /> : <FaRegCommentDots style={{ color: '#818cf8' }} size={23} />}
                            <span className="count ml-0-25">{comments?.length > 0 && `${comments?.length} ${comments?.length === 1 ? "comment" : "comments"}`}</span>
                        </span>
                        {/* onClick={() => likeHandler()} */}
                        {/* <span className="flex-center" >
                            {isLiked ? <AiFillHeart style={{ color: '#818cf8' }} size={23} /> : <AiOutlineHeart style={{ color: '#818cf8' }} size={23} />}
                            <span className="count ml-0-25">{likeCount > 0 && `${likeCount} ${likeCount === 1 ? "Like" : "Likes"}`}</span>
                        </span> */}
                        <span className="flex-center" >
                           <AiOutlineHeart style={{ color: '#818cf8' }} size={23} />
                            <span className="count ml-0-25">like</span>
                        </span>

                    </div>
                    {/* <span className="footer-right">
                        {isBookmarked ? <BsBookmarkFill style={{ color: '#818cf8' }} size={21} onClick={() => bookmarkHandler()} /> :
                            <BsBookmark style={{ color: '#818cf8' }} size={21} onClick={() => bookmarkHandler()} />}
                    </span> */}
                    <span className="footer-right">
                        <BsBookmarkFill style={{ color: '#818cf8' }} size={21} />
                            {/* <BsBookmark style={{ color: '#818cf8' }} size={21}/>} */}
                    </span>
                </div>
                {/* {commentblock && <>
                    <div className="postcard__comments flex flex-align-center p-0-75">
                        <Avatar details={userInfo} className="sm" />
                        <div className="comment_box flex flex-align-center">
                            <input type="text" value={commentData} placeholder="Add a comment..." onChange={(e) => setCommentData(e.target.value)} />
                            <span className="search-form__icon px-1 flex flex-align-center">
                                <MdAddComment style={{ color: '#818cf8' }} size={20} onClick={addCommentHandler} />
                            </span>
                        </div>
                    </div>
                    {comments?.map((comment) => (
                        <Comment key={comment._id} comment={comment} />
                    ))}

                </>
                } */}


            </div>
            {editModalActive ? <CreatePost isOpen={editModalActive} onClose={() => setEditModalActive((val) => !val)} postData={allPost} editModalActive={editModalActive} /> : null}
        
        </>
    )
}