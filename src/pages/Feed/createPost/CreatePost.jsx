import React from 'react'
import { EmojisPicker, Modal } from "../../../components/index";
import { FcPicture } from "../../../utils/icons";
import Avatar from "@mui/material/Avatar";
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import "./createPost.scss";
export const CreatePost = ({isOpen, onClose }) => {
    const { user} = useSelector((state) => state.auth);
    const [emojiPickerActive, setEmojiPickerActive] = useState(false);
    const fileInput = useRef(null);
    
    const [postContent, setPostContent] = useState(
        {
            content: "",
            pic: "",
        });

    const postHandler = (e) => {
        e.preventDefault();
        // dispatch(addPost({ ...postContent }));
        setPostContent({ content: "", pic: "" });
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
        setPostContent({ ...postContent, pic: base64File });
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className='flex flex-col create-form'>
                <div className='form-header flex'>
                    <Avatar sx={{ height: '52px', width: '52px', backgroundColor: '#818cf8' }} src={user?.profileImg || user?.firstName?.charAt(0)} alt={user?.firstName} />
                    <textarea
                        value={postContent.content}
                        type="text"
                        name=""
                        rows={2}
                     onChange={(e) => setPostContent({ ...postContent, content: e.target.value })}
                    />
                </div>
                <div className='form-image'>
                    <img src='../Assets/no_result.png' className='responsive-img'>
                    </img>

                </div>
                <div className='form-footer flex flex-align-center'>
                  <div className="footer-icons__left flex px-1">
                  {/* onClick={() => fileInput.current.click()} */}
                  <span onClick={() => fileInput.current.click()}><FcPicture size={24} /><input ref={fileInput} type="file" style={{display:'none'}} onChange={imageUpload}/></span>
                  <span onClick={() => setEmojiPickerActive((prev) => !prev)}><span className="emoji">🙂</span></span>
                  <EmojisPicker emojiActive={emojiPickerActive} setPostContent={setPostContent} postContent={postContent} />
                  </div>
                  <button className="post-btn px-1-5 py-0-5" onClick={postHandler}>Post</button>
                </div>

            </form>

        </Modal>

        // <form className="create-form flex-col px-1 py-0-25">
        //     <div className="flex create-form__container">
        //         <Avatar details={userDetails} className="md" />
        //         <textarea
        //             value={postContent.content}
        //             type="text"
        //             placeholder="What's on your mind ?"
        //             name=""
        //             rows="3"
        //             onChange={(e) => setPostContent({ ...postContent, content: e.target.value })}
        //         />
        //     </div>
        //     {postContent.pic &&
        //         <div className='flex flex-center'>
        //             <div className='post-img'>
        //                 <img src={postContent.pic} className='responsive-img'></img>
        //             </div>
        //         </div>}

        //     <div className="footer-icons py-0-75 flex">
        //         <div className="footer-icons__left flex px-1">

        //             <span onClick={() => fileInput.current.click()}><FcPicture size={24} /><input ref={fileInput} type="file" style={{display:'none'}} onChange={imageUpload}/></span>
        //             <span onClick={() => setEmojiPickerActive((prev) => !prev)}><span className="emoji">🙂</span></span>
        //             <EmojisPicker emojiActive={emojiPickerActive} setPostContent={setPostContent} postContent={postContent} />
        //         </div>
        //         <div className="footer-icons__right">
        //             <button className="post-btn px-1-5 py-0-5" onClick={postHandler}>Post</button>
        //         </div>
        //     </div>
        // </form>
    )
}
