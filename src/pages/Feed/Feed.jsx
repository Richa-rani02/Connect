import { Navbar, Sidebar, Highlights, Postcard, Loader, EmojisPicker } from "../../components";
import "./feed.scss";
import { getAllPost, addPost } from "../../redux/postSlice";
import { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcPicture, CgSandClock,AiFillClockCircle } from "../../utils/icons";
export const Feed = () => {

    const [emojiPickerActive, setEmojiPickerActive] = useState(false);
    const dispatch = useDispatch();
    const { allPosts, isLoading, postStatus } = useSelector((state) => state.post);
    const { userDetails } = useSelector((state) => state.auth);
    const [feedPost, setFeedPost] = useState([]);
    const [trendingPost, setTrendingPost] = useState({ isTrending: false, posts: [] });
    const filterText=useRef(true);
    const [postContent, setPostContent] = useState(
        {
            content: "",
            pic: "",
        });

    useEffect(() => {
        if (postStatus == 'idle') {
            dispatch(getAllPost());
        }
    }, []);

    useEffect(() => {
        if (allPosts) {
            setFeedPost(allPosts?.filter((post) => post.username === userDetails.username ||
                userDetails?.following?.find((ele) => post?.username === ele?.username))
                .sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt))
            )
        }
    }, [userDetails, allPosts])

    const postHandler = (e) => {
        e.preventDefault();
        dispatch(addPost({ ...postContent }));
        setPostContent({ content: "", pic: "" });
    }

    const trendHandler = () => {
        setTrendingPost((prev) => ({
            ...prev, isTrending: true, posts: [...feedPost]
                ?.filter((post) => post.likes.likeCount > 0)
                ?.sort((a, b) => b?.likes?.likeCount+ b?.comments?.length - a?.likes?.likeCount+a?.comments?.length)
        }))
    }

    const latestHandler=(e)=>{
        setTrendingPost((prev)=>({...prev,isTrending:false}));
        if(filterText.current){
            setFeedPost(feedPost?.sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt)));
            filterText.current=false;
        }else{
            setFeedPost(feedPost?.sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt)));
            filterText.current=true;
        }
    }
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
                                value={postContent.content}
                                type="text"
                                placeholder="What's on your mind ?"
                                name=""
                                rows="3"
                                onChange={(e) => setPostContent({ ...postContent, content: e.target.value })}
                            />
                        </div>
                        <div className="footer-icons py-0-75 flex">
                            <div className="footer-icons__left flex px-1">

                                {/* for further implementation */}

                                {/* <input
                          className='cursor-pointer absolute w-28 opacity-0'
                          accept='image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp'
                          type='file'
                          onChange="{onFileChange}"
                        /> */}
                                <span><FcPicture size={24} /><span className="icon-title">Images</span></span>
                                <span onClick={() => setEmojiPickerActive((prev) => !prev)}><span className="emoji">🙂</span><span className="icon-title">Emojis</span></span>
                                <EmojisPicker emojiActive={emojiPickerActive} setPostContent={setPostContent} postContent={postContent} />
                            </div>
                            <div className="footer-icons__right">
                                <button className="post-btn px-1-5 py-0-5" onClick={postHandler}>Post</button>
                            </div>
                        </div>
                    </form>

                    <div className="post-header flex my-2 flex-align-center px-1 py-0-5">
                        <h4 onClick={trendHandler}><span>🔥</span>Trending</h4>
                        <h4 onClick={latestHandler}><span><CgSandClock size={20} /></span>{filterText.current?'Latest':'Oldest'}</h4>
                    </div>
                    {isLoading ?
                        <Loader /> : trendingPost.isTrending ? (
                            <>
                                {trendingPost.length !== 0 ? (
                                    [...trendingPost.posts].map((posts) => <Postcard key={posts.id} post={posts} />)
                                ) : <></>}
                            </>
                        ) :
                            <>
                                {feedPost.length !== 0 ? (
                                    feedPost?.map((posts) => (
                                        <Postcard key={posts.id} post={posts} setPostContent={setPostContent} postContent={postContent} />
                                    ))
                                ) : <></>}

                            </>}
                </section>
                <Highlights />
            </div>
        </div>
    )
}