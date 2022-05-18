import EmojiPicker from 'emoji-picker-react';
import {useState} from "react";
import "./emojiPicker.scss";
export const EmojisPicker=({emojiActive,setPostContent,postContent})=>{
     const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event,emojiObject) => {
   // setChosenEmoji(emojiObject);
    setPostContent(postContent.concat(emojiObject?.emoji));
  };
return(
    <div className={`emojipicker ${emojiActive?'active':''}`}>
    <EmojiPicker
    onEmojiClick={onEmojiClick}
    />
    </div>
)
}