import { Navbar,Banner, ProfileTab, FollowModal, EditProfileModal,Sidebar,Highlights } from "../../components/index";
import "./profile.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logoutUser} from "../../redux/authSlice";
import { useState, useEffect } from "react";
import { followUnfollowUser } from "./userSlice";
import Avatar from "@mui/material/Avatar";
import {MainContainer} from "../mainContainer/MainContainer";
import { getUserHandlerServices } from "../../services/index";

export const Profile = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const {allUsers} = useSelector((state) => state.auth);
    const {posts}=useSelector((state)=>state.post);
     console.log(userId);
     const userDetails=allUsers.find((user)=>user?.id===userId);
     const userPostDetail=posts.filter((post)=>post.userId===userId);
     console.log(userPostDetail);
    // const { allPosts } = useSelector((state) => state.post);
    // const {allUsers}=useSelector((state)=>state.user);
    // const [openFollow, setOpenFollow] = useState({ modalOpen: false, type: "" });
    // const [openProfileModal, setOpenProfileModal] = useState(false);
    // const [user, setUser] = useState(null);
    // const [isCurrUser, setIsCurrUser] = useState(false);
    // const followModalToogle = () => {
    //     setOpenFollow({ ...openFollow, modalOpen: false, type: "follower" });
    // }
    // const profileModalToogle = () => {
    //     setOpenProfileModal(prev => !prev);
    // }
    // console.log(user);
    // useEffect(() => {
    //     setOpenFollow({ ...openFollow, modalOpen: false, type: "" });
    //     (async () => {
    //         try {
    //             const response = await getUserHandlerServices(userHandler);
    //             setUser(response.data.user);
    //             setIsCurrUser(userDetails._id === response.data.user._id);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })();
    // }, [userHandler,allUsers])
    // const isFollowing=allUsers?.find((el)=>el.username===user?.username)?.followers?.some((user)=>user?.username===userDetails?.username);
    return (
        <>
            <Navbar />
            <MainContainer leftchild={<Sidebar />} mainchild={
                <div className="profile flex flex-col flex-align-center">
                <section className="profile-container flex flex-justify-center">
                    <Banner />
                </section>
                <article className="profile-item flex p-0-75  flex-justify-between">
                    <Avatar sx={{ height: '150px', width: '150px', backgroundColor: '#818cf8' }} src={userDetails?.profileImg ||userDetails?.firstName?.charAt(0)} alt={userDetails?.firstName}/>

                    <div className="profile-details px-0-75 py-0-25">
                        <span className="flex flex-align-center profile-heading">
                            <p>{userDetails?.fullName}</p>
                            {/* {isCurrUser ?
                                <button className="p-0-5 edit-btn" onClick={() => setOpenProfileModal(true)}>Edit Profile</button>
                                : isFollowing?<button className="p-0-5 edit-btn" onClick={()=>dispatch(followUnfollowUser({userId:user?._id,dispatch:dispatch,isFollowing:true}))}>Following</button>
                                              :<button className="p-0-5 edit-btn"  onClick={()=>dispatch(followUnfollowUser({userId:user?._id,dispatch:dispatch,isFollowing:false}))}>Follow</button>
                            } */}
                        </span>

                        <span className="profile-body">
                            <p>{userDetails?.userName}</p>
                            <p>{userDetails?.bio}</p>
                            <a href={userDetails?.website}>{userDetails?.website}</a>
                        </span>

                        <div className="post-count flex mt-1">
                            <span>{userPostDetail?.length}<span className="ml-0-25">Posts</span></span>
                            {/* <span onClick={() => user?.followers.length && setOpenFollow({ ...openFollow, modalOpen: true, type: "follower" })}>{user?.followers.length}<span className="ml-0-25">Followers</span></span>
                            <span onClick={() => user?.following.length && setOpenFollow({ ...openFollow, modalOpen: true, type: "following" })}>{user?.following.length}<span className="ml-0-25">Following</span></span> */}
                        </div>
                        <button className="mt-0-75 logout-btn px-0-75 py-0-5" onClick={() => dispatch(logoutUser())}>
                            Logout
                        </button>
                    </div>
                </article>
                <section className="profile-activity flex flex-center">
                    <ProfileTab ProfileUserId={userId}/>
                </section>
            </div>
            } rightchild={<></>}/>
            
            {/* {openFollow.modalOpen ? <FollowModal isOpen={openFollow.modalOpen} onClose={followModalToogle} userDetail={user} modalData={openFollow} /> : null}
            {openProfileModal ? <EditProfileModal isOpen={openProfileModal} onClose={profileModalToogle} /> : null} */}
        </>
    )
}