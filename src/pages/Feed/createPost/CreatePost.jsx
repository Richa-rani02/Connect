import React from 'react'
import { EmojisPicker, Avatar } from "../../../components/index";
import { FcPicture } from "../../../utils/icons";
import { useState,useRef } from 'react';
import "./createPost.scss";
export const CreatePost = ({ userDetails, postContent, setPostContent, postHandler }) => {
    const [emojiPickerActive, setEmojiPickerActive] = useState(false);
    const fileInput = useRef(null);
 
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
        <form className="create-form flex-col px-1 py-0-25">
            <div className="flex create-form__container">
                <Avatar details={userDetails} className="md" />
                <textarea
                    value={postContent.content}
                    type="text"
                    placeholder="What's on your mind ?"
                    name=""
                    rows="3"
                    onChange={(e) => setPostContent({ ...postContent, content: e.target.value })}
                />
            </div>
            {postContent.pic &&
                <div className='flex flex-center'>
                    <div className='post-img'>
                        <img src={postContent.pic} className='responsive-img'></img>
                    </div>
                </div>}

            <div className="footer-icons py-0-75 flex">
                <div className="footer-icons__left flex px-1">

                    <span onClick={() => fileInput.current.click()}><FcPicture size={24} /><input ref={fileInput} type="file" style={{display:'none'}} onChange={imageUpload}/>Images</span>
                    <span onClick={() => setEmojiPickerActive((prev) => !prev)}><span className="emoji">🙂</span><span className="icon-title">Emojis</span></span>
                    <EmojisPicker emojiActive={emojiPickerActive} setPostContent={setPostContent} postContent={postContent} />
                </div>
                <div className="footer-icons__right">
                    <button className="post-btn px-1-5 py-0-5" onClick={postHandler}>Post</button>
                </div>
            </div>
        </form>
    )
}
