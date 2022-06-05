import { useSelector } from "react-redux";
import { Navbar, Footer, Sidebar, Highlights, Postcard } from "../../components";
import {Empty} from "../index";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../mainContainer/MainContainer";
import "./bookmark.scss";
export const Bookmark = () => {
   const location = useLocation();
   const { bookmark } = useSelector((state) => state.post);
   return (
      <div className="bookmark">
         <Navbar />
         <MainContainer leftchild={<Sidebar />} mainchild={
            <section className="bookmark-section p-1 ">{
               bookmark.length>0 ?
               bookmark.map((posts) => (
                  <Postcard key={posts._id} post={posts} />
                  ))
                :<Empty path={location.pathname}/>
            }
            </section>
        } rightchild={<Highlights />} />
      </div>
   )
}