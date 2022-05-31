import { Navbar, Avatar, Banner, ProfileTab, FollowModal, EditProfileModal } from "../../components/index";
import "./profile.scss";
import {useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../auth/authSlice";
import { useState, useEffect } from "react";
import { getUserHandlerServices } from "../../services/index";

export const Profile = () => {
    const { userHandler } = useParams();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { allPosts } = useSelector((state) => state.post);
    const [openFollow, setOpenFollow] = useState({ modalOpen: false, type: "" });
    const [openProfileModal, setOpenProfileModal] = useState(false);
    const [user, setUser] = useState(null);
    const [isCurrUser, setIsCurrUser] = useState(false);
    const followModalToogle = () => {
        setOpenFollow({ ...openFollow, modalOpen: false, type: "follower" });
    }
    const profileModalToogle = () => {
        setOpenProfileModal(prev => !prev);
    }
console.log(user);
    useEffect(() => {
        (async () => {
            try {
                const response = await getUserHandlerServices(userHandler);
                setUser(response.data.user);
                setIsCurrUser(auth.userDetails._id === response.data.user._id);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [userHandler])

    return (
        <>
            <Navbar />
            <div className="profile flex flex-col flex-align-center">
                <section className="profile-container flex flex-justify-center">
                    <Banner />
                </section>
                <article className="profile-item flex p-0-75  flex-justify-between">
                    <div className="profile-img flex flex-center p-0-25">
                        <Avatar details={user} className="xl" />
                    </div>

                    <div className="profile-details px-0-75 py-0-25">
                        <span className="flex flex-align-center profile-heading">
                            <p>{user?.firstName.concat(" ", user?.lastName)}</p>
                            <button className="p-0-5 edit-btn" onClick={() => setOpenProfileModal(true)}>Edit Profile</button>
                        </span>
                        <span className="profile-body">
                            <p>@{user?.userHandler}</p>
                            <p>{user?.bio}</p>
                            <a href={user?.portfolioLink}>{user?.portfolioLink}</a>
                        </span>

                        <div className="post-count flex mt-1">
                            <span>{[...allPosts.filter((ele) => ele.username === user?.username)].length}<span className="ml-0-25">Posts</span></span>
                            <span onClick={() => user?.followers.length && setOpenFollow({ ...openFollow, modalOpen: true, type: "follower" })}>{user?.followers.length}<span className="ml-0-25">Followers</span></span>
                            <span onClick={() => user?.following.length && setOpenFollow({ ...openFollow, modalOpen: true, type: "following" })}>{user?.following.length}<span className="ml-0-25">Following</span></span>
                        </div>
                        <button className="mt-0-75 logout-btn px-0-75 py-0-5" onClick={() => dispatch(logoutUser(auth))}>
                            Logout
                        </button>
                    </div>
                </article>
                <section className="profile-activity flex flex-center">
                    <ProfileTab userDetails={user} />
                </section>

            </div>
            {openFollow.modalOpen ? <FollowModal isOpen={openFollow.modalOpen} onClose={followModalToogle} userDetail={user} modalData={openFollow} /> : null}
            {openProfileModal ? <EditProfileModal isOpen={openProfileModal} onClose={profileModalToogle} userDetails={user} /> : null}
        </>
    )
}