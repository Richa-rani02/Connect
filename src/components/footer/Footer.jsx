import "./footer.scss";
import {BsGithub,BsLinkedin} from "../../utils/icons";
export const Footer=()=>{
    return(
        <footer className="footer py-0-75">
        <div className="footer__title">Made with <span className="text-highlight">&lt;/&gt;</span>  by Richa</div>
            <ul>
                <div className="footer__icons flex-center mt-0-75">
                    <li>
                        <a href="https://github.com/Richa-rani02"><BsGithub size={22}/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/richa-rani02/"><BsLinkedin size={22}/></a>
                    </li>
                </div>
            </ul>
        </footer>
    )
}