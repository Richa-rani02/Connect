import { Navbar, Footer, Sidebar, Highlights,Postcard } from "../../components";
import "./bookmark.scss";
export const Bookmark=()=>{
    return(
        <div className="bookmark">
        <Navbar />
        <div className="main-container flex flex-justify-center">
             <Sidebar />
            <section className="main-section p-1 ">
                <Postcard/>
                 <Postcard/>
                <Postcard/>
             </section> 
            <Highlights />
        </div>
        {/* <Footer/> */}
    </div>
    )
}