import { Navbar, Sidebar, Highlights, Postcard, Loader, EmojisPicker, SideContainer, BirthdayCard } from "../../components";
import "./feed.scss";
import { Empty } from "../index";
import { useLocation,useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { MainContainer } from "../mainContainer/MainContainer";
import { CreatePost } from "./createPost/CreatePost";
export const Feed = () => {
    const location = useLocation();
    const navigate=useNavigate();
    const { posts, statusAllPost } = useSelector((state) => state.post);
    const userId = localStorage.getItem("userId");
    const { user } = useSelector((state) => state.auth);
    const myFeedPosts =user?.following && posts?.length>0 && 
                        posts.filter((post) =>user?.following.includes(post?.userId) || post?.userId === user?.id);
    const [filterText, setFilterText] = useState("");
    const [createPostActive, setCreatePostActive] = useState(false);
    const handlecreatePostToogle = () => setCreatePostActive((prev) => !prev);
    const applyFilter = () => {
        switch (filterText) {
            case "Trending":
                return myFeedPosts.sort((first, second) => second.likes.length - first.likes.length);
            case "Latest": 
            return myFeedPosts.sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt));
            case "Oldest": {
                return myFeedPosts.sort((first, second) => new Date(first.createdAt) - new Date(second.createdAt));
            } default:
                myFeedPosts;

        }
    }
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
                                <Avatar sx={{ height: '52px', width: '52px', backgroundColor: '#818cf8' }} src={user?.profileImg || user?.firstName?.charAt(0)} alt={user?.firstName} onClick={() => navigate(`/profile/${user?.id}`)}/>
                                <div className="input-click p-0-5" onClick={() => setCreatePostActive(true)}>
                                    What's on your mind ?
                                </div>
                            </div>
                        </article>
                        <article className="filter-section">
                            <select name="sortbydate" value={filterText} onChange={(e) => setFilterText(e.target.value)}>
                                <option>Latest</option>
                                <option>Oldest</option>
                                <option>Trending</option>
                            </select>
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
                            {myFeedPosts?.length !== 0 ? (
                               myFeedPosts?.map((post) => (
                                    <Postcard key={post.id} allPost={post} />
                                ))
                            ) : <Empty path={location.pathname} />}

                            {/* </>
                                } */}
                        </article>
                    </section>
                    // {/* <></> */}

                } rightchild={<Highlights />} />
            </div>
            <CreatePost isOpen={createPostActive} onClose={handlecreatePostToogle} />
        </>
    )
}