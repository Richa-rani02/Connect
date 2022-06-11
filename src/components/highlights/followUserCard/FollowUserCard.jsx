import React from 'react'
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./followUserCard.scss";
import Avatar from "@mui/material/Avatar";
import {followUnfollowUser} from "../../../pages/profile/userSlice";
export const FollowUserCard = ({userDetail}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  // const { userDetails } = useSelector((state) => state.auth);
  return (
    <div className="user_card flex flex-align-center  mb-0-5 px-0-5" key={userDetail.id}>
            <div className="flex user-details flex-align-center">
            <Avatar sx={{ height: '45px', width: '45px', backgroundColor:'#818cf8'}} src={userDetail?.profileImg || userDetail?.firstName?.charAt(0)} alt={userDetail?.firstName} onClick={() => navigate(`/profile/${userDetail?.id}`)} />
            <div>
              <span>
              <p className="user-title">{userDetail?.firstName.concat(" ", userDetail?.lastName)}</p>
              </span>
              <span>
               <p className="user-handler">@{userDetail?.userName}</p>
              </span>
              </div>
              </div>
              <button className="follow-btn px-1 py-0-25"  onClick={()=>dispatch(followUnfollowUser({userId:userDetail._id,dispatch:dispatch,isFollowing:false}))}>Follow</button>
        </div>
  )
}
