import "./followModal.scss";
import { Modal, Avatar } from "../index";
import {followUnfollowUser} from "../../pages/profile/userSlice";
import { useDispatch,useSelector} from "react-redux";
export const FollowModal = ({ isOpen, onClose, userDetail, modalData }) => {
    const dispatch=useDispatch();
    return (
        <Modal isOpen={isOpen} onClose={onClose}>

            {modalData.type === "follower" ?
                  userDetail.followers.map((follower) => (
                    <div className="follow-card flex flex-align-center flex-justify-start mt-1 p-0-5">
                        <div className="flex flex-center">
                            <Avatar details={follower} className="md" />
                            <span className="ml-0-5">
                                <p className="user-name">{follower?.firstName.concat(" ", follower?.lastName)}</p>
                            </span>
                        </div>
                    </div>
                ))
                :
                userDetail.following.map((following) => (
                <div className="follow-card flex flex-align-center flex-justify-start mt-1 p-0-5">
                    <div className="flex flex-center">
                        <Avatar details={following} className="md" />
                        <span className="ml-0-5">
                            <p className="user-name">{following?.firstName.concat(" ", following?.lastName)}</p>
                        </span>
                    </div>
                </div>
                ))
            }

        </Modal>
    )
}