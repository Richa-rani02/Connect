import { Navbar, Footer, Sidebar, Highlights,Postcard } from "../../components";
import "./likedPost.scss";
export const LikedPosts = () => {
    return (
        <div className="liked">
            <Navbar />
            <div className="main-container flex flex-justify-around">
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