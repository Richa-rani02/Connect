import "./comment.scss";
import { BsEmojiSmile} from "../../utils/icons";
export const Comment=()=>{
    return(
        <div className="comments flex flex-align-center p-0-75">
        <span>
            <BsEmojiSmile size={21} />
        </span>
        <input type="text" placeholder="Add a comment..." >
        </input>
        <button className="comments__btn">
            Post
        </button>
    </div>
    )
}