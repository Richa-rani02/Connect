import React from 'react'
import { EmojisPicker, Modal } from "../../../components/index";
import { FcPicture } from "../../../utils/icons";
import Avatar from "@mui/material/Avatar";
import { useState, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addPost,editPost} from "../../../redux/postSlice";
import "./createPost.scss";
export const CreatePost = ({isOpen, onClose,postData,editModalActive}) => {
    const dispatch=useDispatch();
    const { user} = useSelector((state) => state.auth);
    const fileInput = useRef(null);
    let currentDate = new Date().toLocaleDateString();
    const userId = localStorage.getItem("userId");
    const [postContent, setPostContent] = useState(
        {
            postText: postData?.postText,
            postPicUrl: postData?.postPicUrl,
            userId:userId,
            createdAt:currentDate

        });

    const postHandler = (e) => {
        e.preventDefault();
        dispatch(addPost(postContent));
        setPostContent({ postText: "", postPicUrl: "" });
        onClose();
    }  
    const editPostHandler = (e) => {
        e.preventDefault();
       dispatch(editPost({...postContent,id:postData.id}))
        setPostContent({ postText: "", postPicUrl: "" });
        onClose();
    }    

    const imageUpload = async (e) => {
        const file = e.target.files[0];
        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

        let base64File = await toBase64(file);
        setPostContent({ ...postContent, postPicUrl: base64File });
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className='flex flex-col create-form'>
                <div className='form-header flex'>
                    <Avatar sx={{ height: '52px', width: '52px', backgroundColor: '#818cf8' }} src={user?.profileImg || user?.firstName?.charAt(0)} alt={user?.firstName} />
                    <textarea
                        value={postContent.postText}
                        type="text"
                        name=""
                        rows={2}
                     onChange={(e) => setPostContent({ ...postContent, postText: e.target.value })}
                    />
                </div>
                {postContent.postPicUrl &&
                <div className='form-image'>
                    <img src={postContent?.postPicUrl} className='responsive-img'>
                    </img>

                </div>
                }
                <div className='form-footer flex flex-align-center'>
                  <div className="footer-icons__left flex px-1">
                  <span onClick={() => fileInput.current.click()}><FcPicture size={24} /><input ref={fileInput} type="file" style={{display:'none'}} onChange={imageUpload}/></span>
                  </div>
                  {editModalActive ?<button className="post-btn px-1-5 py-0-5" onClick={editPostHandler}>Update</button>:<button className="post-btn px-1-5 py-0-5" onClick={postHandler}>Post</button>}
                </div>
                
            </form>
          
        </Modal>
    )
}
