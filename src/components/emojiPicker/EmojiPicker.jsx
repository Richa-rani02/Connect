import EmojiPicker from 'emoji-picker-react';
import {useState} from "react";
import "./emojiPicker.scss";
export const EmojisPicker=({emojiActive})=>{
    const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (emojiObject) => {
    setChosenEmoji(emojiObject);
  };
return(
    <div className={`emojipicker ${emojiActive?'active':''}`}>
    <EmojiPicker
    onEmojiClick={onEmojiClick}
    />
    </div>
)
}