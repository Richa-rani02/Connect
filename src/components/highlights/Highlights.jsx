import { useSelector,useDispatch} from "react-redux";
import "./highlights.scss";
import { useEffect } from "react";
import { BsSearch } from "../../utils/icons";
import {followUnfollowUser} from "../../pages/profile/userSlice";
import {FollowUserCard} from "./followUserCard/FollowUserCard";
export const Highlights=()=>{
  const dispatch=useDispatch();
    const {allUsers}=useSelector((state)=>state.user);
    const {userDetails}=useSelector((state)=>state.auth);
    const suggestedUser=allUsers
    .filter((user)=>user.username!=userDetails.username)
    .filter((user)=>!userDetails.following.find((ele)=>ele._id===user._id))
    return(
        <section className="user-suggested  flex flex-col flex-align-center">
          <article className="search-bar">
          <form action="" className="search-form flex">
             <span className="search-form__icon px-1 flex flex-align-center">
             <BsSearch size={20} />
             </span>
        <input type="search" className="search-form__input" value=""placeholder="search user..."/>
      </form>
          </article>
          <h3>
           Suggestion for You
          </h3>
          <article className="user-list">
          {suggestedUser?.map((user)=>(
             <FollowUserCard userDetail={user}/>
        ))}
          </article> 
    </section>
    )
}