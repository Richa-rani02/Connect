import { Modal, Avatar } from "../index";
import "./EditProfileModal.scss";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../pages/auth/authSlice";
export const EditProfileModal = ({ isOpen, onClose,userDetails }) => {
    const [profileContent, setProfileContent] = useState(
        {   
            profileImg:userDetails?.profileImg,
            bio: userDetails?.bio,
            portfolioLink: userDetails?.portfolioLink,
        });
 
const dispatch=useDispatch();        
const updateProfileHandler=(e)=>{
    e.preventDefault();
    dispatch(updateUser({...userDetails,...profileContent}));
    onClose();
}        
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col profile-panel">
                <span className="flex editprofile">
                    <h4>Avatar:</h4>
                    <Avatar details={userDetails} className="sm" />

                </span>
                <span className="flex editprofile mt-0-75">
                    <h4>Bio:</h4>
                    <textarea className="right-item p-0-5" value={profileContent.bio}
                    onChange={(e) => setProfileContent({ ...profileContent, bio: e.target.value })}>
                    {profileContent.bio}
                    </textarea>
                </span>
                <span className="flex editprofile mt-0-75">
                    <h4>Link:</h4>
                    <input className="right-item p-0-5" value={profileContent.portfolioLink}
                     onChange={(e) => setProfileContent({ ...profileContent, portfolioLink: e.target.value })}
                    >
                    </input>
                </span>
                <button className="mt-1 py-0-5 px-0-75 update-profile-btn" onClick={updateProfileHandler}>
                    update
                </button>
            </div>
        </Modal>
    )
}