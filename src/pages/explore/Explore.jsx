import { Navbar,Sidebar, Highlights,Postcard,Loader } from "../../components";
import { MainContainer } from "../mainContainer/MainContainer";
import "./explore.scss";
import { useSelector} from "react-redux";
export const Explore=()=>{

    const {allPosts,isLoading}=useSelector((state)=>state.post);
    return(
        <div className="explore">
        <Navbar />
          
            <MainContainer leftchild={<Sidebar />} mainchild={
                <section className="explore-section p-1 ">
                {isLoading ?
                            <Loader /> : <>
                                {allPosts?.map((posts) => (
                                    <Postcard key={posts.id} post={posts} />
                                ))}
                            </>}
                </section>
             } rightchild={<Highlights />}/>
            
        </div>
    )
}