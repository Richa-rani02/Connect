import { Navbar,Footer } from "../../components";
import "./home.scss";
export const Home=()=>{
    return(
        <div className="home">
        <Navbar/>
        <div className="main-section p-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus fugiat voluptatibus recusandae quibusdam natus! Earum recusandae adipisci blanditiis eaque. Minus, harum distinctio!</p>
            </div>
        <Footer/>
        </div>
    )
}