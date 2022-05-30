import "./followModal.scss";
import { Modal, Avatar } from "../index";
export const FollowModal = ({ isOpen, onClose, userDetails, modalData }) => {
    console.log(modalData);
    console.log(userDetails.followers);
    console.log(userDetails.following);
    return (
        <Modal isOpen={isOpen} onClose={onClose}>

            {modalData.type === "follower" ?
                userDetails.followers.map((follower) => (
                    <div className="follow-card flex flex-align-center flex-justify-between mt-1 p-0-5">
                        <div className="flex flex-center">
                            <Avatar details={follower} className="md" />
                            <span className="ml-0-5">
                                <p className="user-name">{follower?.firstName.concat(" ", follower?.lastName)}</p>
                            </span>
                        </div>

                        <button className="follow-btn px-1-5 py-0-5">
                            unfollow
                        </button>
                    </div>
                ))
                :
                userDetails.following.map((following) => (
                <div className="follow-card flex flex-align-center flex-justify-around mt-1 p-0-5">
                    <div className="flex flex-center">
                        <Avatar details={following} className="md" />
                        <span className="ml-0-5">
                            <p className="user-name">{following?.firstName.concat(" ", following?.lastName)}</p>
                        </span>
                    </div>

                    <button className="follow-btn px-1-5 py-0-5">
                        Unfollow
                    </button>
                </div>
                ))
            }

        </Modal>
    )
}