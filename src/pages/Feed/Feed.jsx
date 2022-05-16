import { Navbar, Sidebar, Highlights, Postcard, Loader } from "../../components";
import "./feed.scss";
import { getUserPost } from "./postSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdLocationPin, FcPicture, BsFilterLeft } from "../../utils/icons";
export const Feed = () => {
    const dispatch = useDispatch();
    const { userPosts, isLoading } = useSelector((state) => state.post);
    const { userDetails } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserPost(userDetails.username));
    }, []);

    return (
        <div className="feed">
            <Navbar />
            <div className="main-container flex flex-justify-around">
                <Sidebar />
                <section className="main-section p-1">
                    <form className="create-form flex-col px-1 py-0-25">
                        <div className="flex create-form__container">
                            <div className="profile-img">
                                <img src={userDetails.profileImg} className="responsive-img"></img>
                            </div>
                            <textarea
                                value=""
                                type="text"
                                placeholder="What's on your mind ?"
                                name=""
                                rows="3"
                                onChange="{handleChange}"
                            />
                        </div>
                        <div className="footer-icons py-0-75 flex">
                            <div className="footer-icons__left flex px-1">
                                <span ><FcPicture size={24} /><span className="icon-title">Images</span></span>
                                <span><span className="emoji">🙂</span><span className="icon-title">Feelings</span></span>
                                <span><MdLocationPin color="blue" size={24} /><span className="icon-title">Location</span></span>
                            </div>
                            <div className="footer-icons__right">
                                <button className="post-btn px-1-5 py-0-5">Post</button>
                            </div>
                        </div>
                    </form>
                    <div className="post-header flex my-2 flex-align-center px-1">
                        <h3>Latest Posts</h3>
                        <BsFilterLeft size={26} className="icon" />
                    </div>
                    {isLoading ?
                        <Loader /> : <>
                            {userPosts?.map((posts) => (
                                <Postcard key={posts.id} post={posts} />
                            ))}
                        </>}
                </section>
                <Highlights />
            </div>
        </div>
    )
}