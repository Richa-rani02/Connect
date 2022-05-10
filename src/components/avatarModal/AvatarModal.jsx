import "./avatarModal.scss";
import { Modal } from "../../components/index";
export const AvatarModal = ({isOpen,onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h3 className="profile-title">Choose your profile image!!</h3>
            <div class="radio-buttons flex-center py-3">
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
            </div>
        </Modal>
    )
}