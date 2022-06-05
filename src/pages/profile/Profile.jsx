import { Navbar, Avatar, Banner, ProfileTab, FollowModal, EditProfileModal,Sidebar,Highlights } from "../../components/index";
import "./profile.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../auth/authSlice";
import { useState, useEffect } from "react";
import { followUnfollowUser } from "./userSlice";
import {MainContainer} from "../mainContainer/MainContainer";
import { getUserHandlerServices } from "../../services/index";

export const Profile = () => {
    const { userHandler } = useParams();
    const dispatch = useDispatch();
    const { userDetails } = useSelector((state) => state.auth);
    const { allPosts } = useSelector((state) => state.post);
    const {allUsers}=useSelector((state)=>state.user);
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
    useEffect(() => {
        setOpenFollow({ ...openFollow, modalOpen: false, type: "" });
        (async () => {
            try {
                const response = await getUserHandlerServices(userHandler);
                setUser(response.data.user);
                setIsCurrUser(userDetails._id === response.data.user._id);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [userHandler,allUsers])
    const isFollowing=allUsers?.find((el)=>el.username===user?.username)?.followers?.some((user)=>user?.username===userDetails?.username);
    return (
        <>
            <Navbar />
            <MainContainer leftchild={<Sidebar />} mainchild={
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
                            {isCurrUser ?
                                <button className="p-0-5 edit-btn" onClick={() => setOpenProfileModal(true)}>Edit Profile</button>
                                : isFollowing?<button className="p-0-5 edit-btn" onClick={()=>dispatch(followUnfollowUser({userId:user?._id,dispatch:dispatch,isFollowing:true}))}>Following</button>
                                              :<button className="p-0-5 edit-btn"  onClick={()=>dispatch(followUnfollowUser({userId:user?._id,dispatch:dispatch,isFollowing:false}))}>Follow</button>
                            }
                        </span>

                        <span className="profile-body">
                            <p>@{user?.userHandler}</p>
                            <p>{isCurrUser ? userDetails?.bio : user?.bio}</p>
                            <a href={isCurrUser ? userDetails?.portfolioLink : user?.portfolioLink}>{isCurrUser ? userDetails?.portfolioLink : user?.portfolioLink}</a>
                        </span>

                        <div className="post-count flex mt-1">
                            <span>{[...allPosts.filter((ele) => ele.username === user?.username)].length}<span className="ml-0-25">Posts</span></span>
                            <span onClick={() => user?.followers.length && setOpenFollow({ ...openFollow, modalOpen: true, type: "follower" })}>{user?.followers.length}<span className="ml-0-25">Followers</span></span>
                            <span onClick={() => user?.following.length && setOpenFollow({ ...openFollow, modalOpen: true, type: "following" })}>{user?.following.length}<span className="ml-0-25">Following</span></span>
                        </div>
                        <button className="mt-0-75 logout-btn px-0-75 py-0-5" onClick={() => dispatch(logoutUser())}>
                            Logout
                        </button>
                    </div>
                </article>
                <section className="profile-activity flex flex-center">
                    <ProfileTab userDetails={user} />
                </section>
            </div>

            } rightchild={<Highlights />}/>
            
            {openFollow.modalOpen ? <FollowModal isOpen={openFollow.modalOpen} onClose={followModalToogle} userDetail={user} modalData={openFollow} /> : null}
            {openProfileModal ? <EditProfileModal isOpen={openProfileModal} onClose={profileModalToogle} /> : null}
        </>
    )
}