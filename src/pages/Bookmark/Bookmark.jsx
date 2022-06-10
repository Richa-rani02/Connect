import { useSelector } from "react-redux";
import { Navbar, Footer, Sidebar, Highlights, Postcard } from "../../components";
import {Empty} from "../index";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../mainContainer/MainContainer";
import "./bookmark.scss";
export const Bookmark = () => {
   const location = useLocation();
   const { posts } = useSelector((state) => state.post);
   const currentUserId=localStorage.getItem("userId");
   const bookmarkPost=posts.filter((post)=>post.bookmark.indexOf(currentUserId)>-1);
   return (
      <div className="bookmark">
         <Navbar />
         <MainContainer leftchild={<Sidebar />} mainchild={
            <section className="bookmark-section">{
               bookmarkPost.length>0 ?
               bookmarkPost.map((posts) => (
                  <Postcard key={posts._id} allPost={posts} />
                  ))
                :<Empty path={location.pathname}/>
            }
            </section>
        } rightchild={<Highlights />} />
      </div>
   )
}