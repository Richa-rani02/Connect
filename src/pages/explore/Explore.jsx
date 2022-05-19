import { Navbar,Sidebar, Highlights,Postcard,Loader } from "../../components";
import "./explore.scss";
import { useSelector,useDispatch } from "react-redux";
export const Explore=()=>{

    const {allPosts,isLoading}=useSelector((state)=>state.post);
    return(
        <div className="explore">
        <Navbar />
        <div className="main-container flex flex-justify-around">
            <Sidebar />
            <section className="main-section p-1 ">
            {isLoading ?
                        <Loader /> : <>
                            {allPosts?.map((posts) => (
                                <Postcard key={posts.id} post={posts} />
                            ))}
                        </>}
            </section>
            <Highlights />
        </div>
    </div>
    )
}