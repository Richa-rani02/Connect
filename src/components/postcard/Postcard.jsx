import "./postcard.scss";
import { BsThreeDots, AiOutlineHeart, BsShareFill, BsBookmark, FaRegCommentDots, BsEmojiSmile } from "../../utils/icons";
export const Postcard = () => {
    return (
        <div className="postcard mt-1-5 p-0-25">
            <div className="postcard__header flex flex-align-center">
                <div className="leftspan flex px-0-75">
                    <span className="profile">
                        <img src="../Assets/avatar3.png" className="responsive-img"></img>
                    </span>
                    <span className="flex flex-align-center">
                        <h4>Richa</h4>
                        <p>@richa02</p>
                    </span>
                </div>
                <span className="rightspan px-0-5">
                    <BsThreeDots size={22} />
                </span>
            </div>
            <div className="postcard__content p-0-25">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ducimus consectetur sequi.</p>
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