import { useSelector } from "react-redux";
import { Navbar, Footer, Sidebar, Highlights, Postcard } from "../../components";
import { MainContainer } from "../mainContainer/MainContainer";
import "./bookmark.scss";
export const Bookmark = () => {
   const { bookmark } = useSelector((state) => state.post);
   return (
      <div className="bookmark">
         <Navbar />
         <MainContainer leftchild={<Sidebar />} mainchild={
            <section className="bookmark-section p-1 ">
               {bookmark.map((posts) => (
                  <Postcard key={posts._id} post={posts} />
               ))}
            </section>
        } rightchild={<Highlights />} />
      </div>
   )
}