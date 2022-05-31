import { Navbar, Avatar, Banner, ProfileTab, FollowModal } from "../../components/index";
import "./profile.scss";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../auth/authSlice";
import { useState } from "react";

export const Profile = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { allPosts } = useSelector((state) => state.post);
    const { state } = useLocation();
    const { userDetails } = state;
    const [openFollow, setOpenFollow] = useState({ modalOpen: false, type: "" });
    const followModalToogle = () => {
        setOpenFollow({ ...openFollow, modalOpen: false, type: "follower" });
    }
    return (
        <>
            <Navbar />
            <div className="profile flex flex-col flex-align-center">
                <section className="profile-container flex flex-justify-center">
                    <Banner />
                </section>
                <article className="profile-item flex p-0-75  flex-justify-between">
                    <div className="profile-img flex flex-center p-0-25">
                        <Avatar details={userDetails} className="xl" />
                    </div>

                    <div className="profile-details px-0-75 py-0-25">
                        <span className="flex flex-align-center profile-heading">
                            <p>{userDetails?.firstName.concat(" ", userDetails?.lastName)}</p>
                            <button className="p-0-5 edit-btn">Edit Profile</button>
                        </span>
                        <span className="profile-body">
                            <p>@{userDetails?.userHandler}</p>
                            <p>{userDetails?.bio}</p>
                            <a href={userDetails?.portfolioLink}>{userDetails?.portfolioLink}</a>
                        </span>

                        <div className="post-count flex mt-1">
                            <span>{[...allPosts.filter((ele) => ele.username === userDetails.username)].length}<span className="ml-0-25">Posts</span></span>
                            <span onClick={() => userDetails?.followers.length && setOpenFollow({ ...openFollow, modalOpen: true, type: "follower" })}>{userDetails?.followers.length}<span className="ml-0-25">Followers</span></span>
                            <span onClick={() => userDetails?.following.length && setOpenFollow({ ...openFollow, modalOpen: true, type: "following" })}>{userDetails?.following.length}<span className="ml-0-25">Following</span></span>
                        </div>
                        <button className="mt-0-75 logout-btn px-0-75 py-0-5" onClick={() => dispatch(logoutUser(auth))}>
                            Logout
                        </button>
                    </div>
                    {/* <div className="button-group flex ">
                        <button className="px-0-75 py-0-5 action-btn">
                            Edit Profile
                        </button>
                        <button className="px-0-75 py-0-5 action-btn" onClick={() => dispatch(logoutUser(auth))}>logout</button>
                    </div> */}
                </article>
                <section className="profile-activity flex flex-center">
                    <ProfileTab userDetails={userDetails} />
                </section>

            </div>
            {openFollow.modalOpen ? <FollowModal isOpen={openFollow.modalOpen} onClose={followModalToogle} userDetail={userDetails} modalData={openFollow} /> : null}
        </>
    )
}