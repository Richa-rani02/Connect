import { Navbar, Avatar, Banner, ProfileTab,FollowModal } from "../../components/index";
import "./profile.scss";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../auth/authSlice";
import {useState} from "react";

export const Profile = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const { state } = useLocation();
    const { userDetails } = state;
    const [openFollow,setOpenFollow]=useState({modalOpen:false,type:""});
    const followModalToogle = () => {
        setOpenFollow({...openFollow,modalOpen:false,type:"follower"});
    }
    return (
        <>
            <Navbar />
            <div className="profile flex flex-col flex-align-center">
                <section className="profile-container flex flex-justify-center">
                    <Banner />
                </section>
                <article className="profile-item flex flex-align-center p-0-75 flex-justify-center">
                    <Avatar details={userDetails} className="lg" />
                    <div className="profile-details">
                        <p>@{userDetails?.userHandler}</p>
                        <div className="post-count flex mt-1">
                            <span onClick={()=>userDetails?.followers.length && setOpenFollow({...openFollow,modalOpen:true,type:"follower"})}>{userDetails?.followers.length}<span className="ml-0-25">Followers</span></span>
                            <span onClick={()=>userDetails?.following.length && setOpenFollow({...openFollow,modalOpen:true,type:"following"})}>{userDetails?.following.length}<span className="ml-0-25">Following</span></span>
                        </div>
                    </div>
                    <div className="button-group flex ">
                        <button className="px-0-75 py-0-5 action-btn">
                            Edit Profile
                        </button>
                        <button className="px-0-75 py-0-5 action-btn" onClick={() => dispatch(logoutUser(auth))}>logout</button>
                    </div>
                </article>
                <section className="profile-activity flex flex-center">
                    <ProfileTab userDetails={userDetails} />
                </section>

            </div>
            {openFollow.modalOpen ? <FollowModal isOpen={openFollow.modalOpen} onClose={followModalToogle} userDetail={userDetails} modalData={openFollow} /> : null}
        </>
    )
}