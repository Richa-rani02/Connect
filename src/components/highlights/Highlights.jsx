import { useSelector } from "react-redux";
import "./highlights.scss";
import { BsSearch } from "../../utils/icons";
import { FollowUserCard } from "./followUserCard/FollowUserCard";
import { searchUser } from "./helper";
import { Loader } from "../index";
import { useState } from "react";
export const Highlights = () => {
  // const { allUsers } = useSelector((state) => state.user);
  const { allUsers, getUsersStatus, user } = useSelector((state) => state.auth);
  const [searchText, setSearchText] = useState("");
  const suggestedUser = allUsers.filter((userDetails) => userDetails.email !== user.email);
  //   const suggestedUser = allUsers
  //     .filter((user) => user.username != userDetails.username)
  //     .filter((user) => !userDetails.following.find((ele) => ele._id === user._id));
  const filteredUser = searchUser(suggestedUser, searchText);
  return (
    <section className="user-suggested  flex flex-col flex-align-center">
      <article className="search-bar">
        <form action="" className="search-form flex">
          <span className="search-form__icon px-1 flex flex-align-center">
            <BsSearch size={20} />
          </span>
          <input type="search" className="search-form__input" value={searchText} placeholder="search user..." onChange={(e) => setSearchText(e.target.value)} />
        </form>
      </article>
      <h3>
        Suggestion for You
      </h3>

      {getUsersStatus === "pending" ? <></>
        : filteredUser.length > 0 ?
          <article className="user-list">
            {filteredUser?.map((user) => (
              <FollowUserCard userDetail={user} />
            ))
            }
          </article>
          :
          <div className="nouser">
            <img src="../Assets/nouser.png" className="responsive-img">
            </img>
          </div>
      }

    </section>
  )
}