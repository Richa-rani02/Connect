import "./Error.scss";
import { useNavigate } from "react-router-dom";
export const Empty=({path})=>{
    let message = "";
    let navigate = useNavigate();
    switch (path) {
        case "/bookmark":
            {
                img:"../Assets/bookmark.png";
                message = "You have not saved any post !!!"
            }
            break;
        case "/feed":
            {
                img:"../Assets/no_result.png";
                message = "Post something !!!"
            }
    }
    return(
        <div className="empty-page flex-center flex-col">
            <div className="empty-page__img">
                <img src={img} className="responsive-img" alt="emptyimage"/>
            </div>
            <div className="empty-page__text">
                <span >{message}</span>

            </div>
        </div>
    )
}