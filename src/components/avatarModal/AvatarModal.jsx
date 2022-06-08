import "./avatarModal.scss";
import { Modal } from "../../components/index";
import Avatar from "@mui/material/Avatar";
import {avatars} from "./avatarConstants";
export const AvatarModal = ({isOpen,onClose,formValues,setFormValues}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h3 className="profile-title mt-1">Choose your profile image!!</h3>
            <div className="flex avatar-container mt-1">
            {avatars.map((avatar_img)=>(
                <span key={avatar_img.id} >
               <Avatar sx={{ height: '60px', width: '60px' }} src={avatar_img.avatar} 
                onClick={
                   (e)=>{
                     e.target.classList.add("selected-avatar");
                     onClose();
                    setFormValues({ ...formValues, profileImg: e.target.src })}
                   
                  
                   }/> 
               </span>
            ))}
              </div>
            {/* <div class="radio-buttons flex-center py-3">
            <label class="custom-radio">
          <input type="radio" name="radio" checked />
          <span class="radio-btn flex-center">
              <img src="../Assets/avatar4.jpg" className="responsive-img"></img>
          </span>
        </label>
        <div className="line"></div>
        
        <label class="custom-radio">
          <input type="radio" name="radio"/>
          <span class="radio-btn flex-center">
              <img src="../Assets/avatar5.jpg" className="responsive-img"></img>
          </span>
        </label>
        <div className="line"></div>
        <label class="custom-radio">
          <input type="radio" name="radio"/>
          <span class="radio-btn flex-center">
              <img src="../Assets/avatar3.png" className="responsive-img"></img>
          </span>
        </label>
            </div> */}
        </Modal>
    )
}