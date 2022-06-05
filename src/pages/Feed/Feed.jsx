import { Navbar, Sidebar, Highlights, Postcard, Loader, EmojisPicker, Avatar, SideContainer, BirthdayCard } from "../../components";
import "./feed.scss";
import { Empty } from "../index";
import { useLocation } from "react-router-dom";
import { getAllPost, addPost } from "../../redux/postSlice";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcRightUp, FcGenericSortingAsc, FcGenericSortingDesc } from "../../utils/icons";
import { MainContainer } from "../mainContainer/MainContainer";
import { CreatePost } from "./createPost/CreatePost";
export const Feed = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { allPosts, isLoading, postStatus } = useSelector((state) => state.post);
    const { userDetails } = useSelector((state) => state.auth);
    const [feedPost, setFeedPost] = useState([]);
    const [trendingPost, setTrendingPost] = useState({ isTrending: false, posts: [] });
    //const filterText = useRef(true);
    const [filterText, setFilterText] = useState("");
    const [postContent, setPostContent] = useState(
        {
            content: "",
            pic: "",
        });

    useEffect(() => {
        if (postStatus == 'idle') {
            dispatch(getAllPost());
        }
    }, [allPosts]);

    useEffect(() => {
        if (allPosts) {
            setFeedPost(allPosts?.filter((post) => post.username === userDetails.username ||
                userDetails?.following?.find((ele) => post?.username === ele?.username))
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
                ?.sort((a, b) => b?.likes?.likeCount + b?.comments?.length - a?.likes?.likeCount + a?.comments?.length)
        }))
    }

    const latestHandler = () => {
        setTrendingPost((prev) => ({ ...prev, isTrending: false }));
        setFeedPost(feedPost?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }
    const oldestHandler = () => {
        setTrendingPost((prev) => ({ ...prev, isTrending: false }));
        setFeedPost(feedPost?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    }

    return (
        <div className="feed">
            <Navbar />
            <MainContainer leftchild={
                <>
                    <Sidebar />
                    <SideContainer />
                </>
            } mainchild={
                <section className="main-section flex flex-col">
                    <article className="">
                        <CreatePost userDetails={userDetails} postContent={postContent} setPostContent={setPostContent} postHandler={postHandler} />

                        <div className="post-header flex py-0-75">
                            <h4 onClick={trendHandler}><span><FcRightUp size={20} /></span>Trending</h4>
                            <h4 onClick={oldestHandler}><span><FcGenericSortingAsc size={20} /></span>Oldest</h4>
                            <h4 onClick={latestHandler}><span><FcGenericSortingDesc size={20} /></span>Latest</h4>
                        </div>
                    </article>
                    <article className="post-list px-1-5 py-0-75">

                        {isLoading ?
                            <Loader /> : trendingPost.isTrending ? (
                                <>
                                    {trendingPost.length > 0 ? (
                                        [...trendingPost.posts].map((posts) => <Postcard key={posts.id} post={posts} />)
                                    ) : <Empty path="/liked"/>}
                                </>
                            ) :
                                <>
                                    {feedPost.length !== 0 ? (
                                        feedPost?.map((posts) => (
                                            <Postcard key={posts.id} post={posts} setPostContent={setPostContent} postContent={postContent} />
                                        ))
                                    ) : <Empty path={location.pathname}/>}

                                </>}
                    </article>
                </section>


            } rightchild={<Highlights />} />
        </div>
    )
}