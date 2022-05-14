import { Navbar, Footer, Sidebar, Highlights,Postcard } from "../../components";
import { Routes, Route } from "react-router-dom";
import "./feed.scss";
import { Bookmark } from "../index";
import { MdLocationPin, FcPicture,BsFilterLeft } from "../../utils/icons";
export const Feed = () => {
    return (
        <div className="feed">
            <Navbar />
            <div className="main-container flex flex-justify-around">
                <Sidebar />
                <section className="main-section p-1 ">
                    <form className="create-form flex-col px-1 py-0-25">
                        <div className="flex create-form__container">
                            <div className="profile-img">
                                <img src="../Assets/avatar3.png" className="responsive-img"></img>
                            </div>
                            <textarea
                                value=""
                                type="text"
                                placeholder="What's on your mind ?"
                                name=""
                                rows="3"
                                onChange="{handleChange}"
                            />
                        </div>
                        <div className="footer-icons py-0-75 flex">
                            <div className="footer-icons__left flex px-1">
                                <span ><FcPicture size={24} />Images</span>
                                <span><span className="emoji">🙂</span>Feelings</span>
                                <span><MdLocationPin color="blue" size={24} />Location</span>
                            </div>
                            <div className="footer-icons__right">
                                <button className="post-btn px-1-5 py-0-5">Post</button>
                            </div>
                        </div>
                    </form>
                    <div className="post-header flex my-2 flex-align-center px-1">
                        <h3>Latest Posts</h3>
                        <BsFilterLeft size={26} className="icon"/>
                    </div>
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