import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner1 from "../../assets/bannersocial1.jpg";
import Banner2 from "../../assets/bannersocial2.jpg";
import Banner3 from "../../assets/bannersocial3.jpg";
import Banner4 from "../../assets/bannersocial4.jpg";
import "./Banner.scss";
export const Banner=()=>{
    const properties = {
        duration: 1500,
        transitionDuration: 1000,
        easing: "ease",
        arrows:false,
      };
     const fadeImages = [Banner1, Banner2, Banner3, Banner4];
    return (
        <div className="banner_container">
            <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div className="banner_container" key={index}>
            <img src={fadeImage} className="banner  responsive-img" />
          </div>
        ))}
      </Fade>
        </div>
    )
}