import { Navbar } from "../../components/index";
import "./profile.scss";
export const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="profile flex flex-justify-center mt-1">
                <section className="profile__section flex flex-col flex-align-center p-0-75">
                    <div className="profile-details flex px-0-75 py-0-75">
                        <div className="image">
                            <img src="../Assets/avatar3.png" className="responsive-img"></img>
                        </div>
                        <div className="ml-2">
                            <div className="flex title">
                            <p>Richa</p>
                            <button className="px-0-75 py-0-5">logout</button>
                            </div>
                       
                        <div className="post-count mt-2 flex">
                            <span>12<span className="ml-0-25">post</span></span>
                            <span>12<span className="ml-0-25">Followers</span></span>
                            <span>12<span className="ml-0-25">Following</span></span>
                        </div>
                        </div>
                       
                        

                    </div>
                    <div className="posts-details">

                    </div>
                    <img>

                    </img>
                </section>
            </div>
        </>
    )
}