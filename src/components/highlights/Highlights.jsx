import { useSelector,useDispatch} from "react-redux";
import "./highlights.scss";
import { useEffect } from "react";
import {followUnfollowUser} from "../../pages/profile/userSlice";
export const Highlights=()=>{
  const dispatch=useDispatch();
    const {allUsers}=useSelector((state)=>state.user);
    const {userDetails}=useSelector((state)=>state.auth);
    const suggestedUser=allUsers
    .filter((user)=>user.username!=userDetails.username)
    .filter((user)=>!userDetails.following.find((ele)=>ele._id===user._id))
    // useEffect(()=>{
    // dispatch(followUnfollowUser(userDetails._id));
    // },[])
// const followHandler=()=>{
//     dispatch(followUnfollowUser(suggestedUser._id));
// }
//   console.log(allUsers);
    return(
        <section className="user-suggested  flex flex-col flex-align-center p-0-5 mb-1">
        <h3 className="user-suggested__title mb-0-75">
            Who to Follow
        </h3>
        {suggestedUser?.map((user)=>(
            <div className="user_card flex flex-align-center  mb-0-25 pb-1" key={user.id}>
            <div className="flex user-details flex-align-center">
            <span className="follow-img">
            <img src={user?.profileImg} className="responsive-img"/>
            </span>
            <div>
              <span>
              <p className="user-title">{user?.firstName.concat(" ", user?.lastName)}</p>
              </span>
              <span>
               <p className="user-handler">@{user?.userHandler}</p>
              </span>
              </div>
              </div>
              <button className="follow-btn px-1 py-0-25" onClick={()=>dispatch(followUnfollowUser({userId:user._id,dispatch:dispatch,isFollowing:false}))}>+ Follow</button>
        </div>
        ))}
        
        
    </section>
    )
}