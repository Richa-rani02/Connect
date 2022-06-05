import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import "./followUserCard.scss";
import {Avatar} from "../../index";
import {followUnfollowUser} from "../../../pages/profile/userSlice";
export const FollowUserCard = ({userDetail}) => {
  const dispatch=useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  return (
    <div className="user_card flex flex-align-center  mb-0-5 px-0-5" key={userDetail.id}>
            <div className="flex user-details flex-align-center">
            <Avatar details={userDetail} className="md" clickRequired="true"/>
            <div>
              <span>
              <p className="user-title">{userDetail?.firstName.concat(" ", userDetail?.lastName)}</p>
              </span>
              <span>
               <p className="user-handler">@{userDetail?.userHandler}</p>
              </span>
              </div>
              </div>
              <button className="follow-btn px-1 py-0-25"  onClick={()=>dispatch(followUnfollowUser({userId:userDetail._id,dispatch:dispatch,isFollowing:false}))}>Follow</button>
        </div>
  )
}
