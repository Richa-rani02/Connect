import React from 'react'
import "./followUserCard.scss";
export const FollowUserCard = ({userDetail}) => {
  return (
    <div className="user_card flex flex-align-center  mb-0-5 px-0-5" key={userDetail.id}>
            <div className="flex user-details flex-align-center">
            <span className="follow-img">
            <img src={userDetail?.profileImg} className="responsive-img"/>
            </span>
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
