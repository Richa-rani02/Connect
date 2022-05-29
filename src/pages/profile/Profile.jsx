import { Navbar,Avatar,Banner,ProfileTab } from "../../components/index";
import "./profile.scss";
import { useSelector,useDispatch } from "react-redux";
import {logoutUser} from "../auth/authSlice";
import { useEffect } from "react";
export const Profile = () => {
    const dispatch=useDispatch();
    const auth=useSelector((state)=>state.auth);
    return (
        <>
            <Navbar />

            <div className="profile flex flex-col flex-align-center">
                <section className="profile-container flex flex-justify-center">
                    <Banner/>
                    </section>
                 <article className="profile-item flex flex-align-center p-0-75 flex-justify-center">
                    <Avatar details="{userDetails}" className="lg"/>
                    <div className="profile-details">
                        <p>Username</p>
                        <div className="post-count flex mt-1">
                            <span>12<span className="ml-0-25">Followers</span></span>
                            <span>12<span className="ml-0-25">Following</span></span>
                        </div>
                    </div>
                    <div className="button-group flex ">
                    <button className="px-0-75 py-0-5 action-btn">
                            Edit Profile
                        </button>
                    <button className="px-0-75 py-0-5 action-btn"onClick={()=>dispatch(logoutUser(auth))}>logout</button>
                    </div>
                     </article>  
                <section className="profile-activity flex flex-center">
                    <ProfileTab/>
                </section>

            </div>
        </>
    )
}