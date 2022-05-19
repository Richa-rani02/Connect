import { Modal } from "../index";
import "./EditPostModal.scss";
import { editPost } from "../../redux/postSlice";
import {useState} from "react";
import { useDispatch } from "react-redux";
export const EditPostModal=({isOpen,onClose,postData,userInfo})=>{  
    
    let dispatch=useDispatch();
    const [postContent, setPostContent] = useState(
        {
            content: postData?.content,
            pic: postData?.pic,
        });

const updateHandler = (e) => {
        e.preventDefault();
        dispatch(editPost({ postData:{...postData,...postContent},postId:postData._id }));
        onClose();
    }        
return(
    <Modal isOpen={isOpen} onClose={onClose}>
        <form className="update-form flex-col p-0-5 mt-1">
        <div className="flex update-form__container">
                            <div className="profile-img">
                                <img src={userInfo?.profileImg} className="responsive-img"></img>
                            </div>
                            <textarea
                                value={postContent.content}
                                type="text"
                                placeholder="What's on your mind ?"
                                name="content"
                                rows="3"
                                onChange={(e) => setPostContent({ ...postContent, content: e.target.value })}
                            />
                        </div>
                        <button className="update-btn px-1-5 py-0-5 mt-0-5" onClick={updateHandler}>
                        Update
                        </button>
        </form>
    </Modal>
)
}