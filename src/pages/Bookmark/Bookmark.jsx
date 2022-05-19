import { useSelector } from "react-redux";
import { Navbar, Footer, Sidebar, Highlights,Postcard } from "../../components";
import "./bookmark.scss";
export const Bookmark=()=>{
    const {bookmark}=useSelector((state)=>state.post);
    return(
        <div className="bookmark">
        <Navbar />
        <div className="main-container flex flex-justify-center">
             <Sidebar />
            <section className="main-section p-1 ">
                {bookmark.map((posts)=>(
                   <Postcard key={posts._id} post={posts} /> 
                ))}
             </section> 
            <Highlights />
        </div>
    </div>
    )
}