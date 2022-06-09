import { Navbar, Sidebar, Highlights, Postcard, Loader, EmojisPicker, SideContainer, BirthdayCard } from "../../components";
import "./feed.scss";
import { Empty } from "../index";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { FcRightUp, FcGenericSortingAsc, FcGenericSortingDesc } from "../../utils/icons";
import { MainContainer } from "../mainContainer/MainContainer";
import { CreatePost } from "./createPost/CreatePost";
export const Feed = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {posts,statusAllPost } = useSelector((state) => state.post);
    const userId=localStorage.getItem("userId");
    const { userDetails } = useSelector((state) => state.auth);
    const { user} = useSelector((state) => state.auth);
    const myFeedPosts=posts.filter((post)=>post.userId===userId);
    const [trendingPost, setTrendingPost] = useState({ isTrending: false, posts: [] });
    const [filterText, setFilterText] = useState("");
    const [createPostActive , setCreatePostActive]=useState(false);
    // const [postContent, setPostContent] = useState(
    //     {
    //         content: "",
    //         pic: "",
    //     });

    // useEffect(() => {
    //     if (postStatus == 'idle') {
    //         dispatch(getAllPost());
    //     }
    // }, [allPosts]);

    // useEffect(() => {
    //     if (allPosts) {
    //         setFeedPost(allPosts?.filter((post) => post.username === userDetails.username ||
    //             userDetails?.following?.find((ele) => post?.username === ele?.username))
    //             .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    //         )
    //     }
    // }, [userDetails, allPosts])
    const handlecreatePostToogle = () => setCreatePostActive((prev) => !prev);

    // const postHandler = (e) => {
    //     e.preventDefault();
    //     dispatch(addPost({ ...postContent }));
    //     setPostContent({ content: "", pic: "" });
    // }

    // const trendHandler = () => {
    //     setTrendingPost((prev) => ({
    //         ...prev, isTrending: true, posts: [...feedPost]
    //             ?.filter((post) => post.likes.likeCount > 0)
    //             ?.sort((a, b) => b?.likes?.likeCount + b?.comments?.length - a?.likes?.likeCount + a?.comments?.length)
    //     }))
    // }

    // const latestHandler = () => {
    //     setTrendingPost((prev) => ({ ...prev, isTrending: false }));
    //     setFeedPost(feedPost?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    // }
    // const oldestHandler = () => {
    //     setTrendingPost((prev) => ({ ...prev, isTrending: false }));
    //     setFeedPost(feedPost?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    // }
    return (
        <>
        <div className="feed">
            <Navbar />
            <MainContainer leftchild={

                <Sidebar />
            } mainchild={
                <section className="main-section flex flex-col">
                    <article className="">
                        <div className="input-click-container flex flex-align-center p-0-25">
                        <Avatar sx={{ height: '52px', width: '52px', backgroundColor:'#818cf8'}} src={user?.profileImg || user?.firstName?.charAt(0)} alt={user?.firstName} />
                         <div className="input-click p-0-5" onClick={()=>setCreatePostActive(true)}>
                         What's on your mind ?
                         </div>
                        </div>
                        {/* <CreatePost userDetails={userDetails} postContent={postContent} setPostContent={setPostContent} postHandler={postHandler} /> */}

                        {/* <div className="post-header flex py-0-5">
                            <h4 onClick={trendHandler}><span><FcRightUp size={20} /></span>Trending</h4>
                            <h4 onClick={oldestHandler}><span><FcGenericSortingAsc size={20} /></span>Oldest</h4>
                            <h4 onClick={latestHandler}><span><FcGenericSortingDesc size={20} /></span>Latest</h4>
                        </div> */}
                    </article>
                    <article className="post-list">

                        {/* {isLoading ?
                            <Loader /> : trendingPost.isTrending ? (
                                <>
                                    {trendingPost.posts.length > 0 ? (
                                        [...trendingPost.posts].map((posts) => <Postcard key={posts.id} post={posts} />)
                                    ) : <Empty path="/liked" />}
                                </>
                            ) :
                                <> */}
                                    {myFeedPosts.length !== 0 ? (
                                        myFeedPosts?.map((post) => (
                                            <Postcard key={post.id} allPost={post}/>
                                        ))
                                    ) : <Empty path={location.pathname} />}

                                {/* </>
                                } */}
                    </article>
                </section>
// {/* <></> */}

            } rightchild={<Highlights />} />
        </div>
        <CreatePost isOpen={createPostActive} onClose={handlecreatePostToogle}/>
        </>
    )
}