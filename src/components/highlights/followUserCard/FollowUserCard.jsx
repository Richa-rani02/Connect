import React from 'react'
import "./followUserCard.scss";
import {Avatar} from "../../index";
export const FollowUserCard = ({userDetail}) => {
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
              <button className="follow-btn px-1 py-0-25"> Follow</button>
        </div>
  )
}
