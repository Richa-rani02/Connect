import "./highlights.scss";
export const Highlights=()=>{
    return(
        <section className="user-suggested  flex flex-col flex-align-center p-0-5 ">
        <h3 className="user-suggested__title mb-0-75">
            Who to Follow
        </h3>
        <div className="user_card flex flex-align-center px-1 mb-1">
            <div className="flex user-details flex-align-center">
            <span className="follow-img">
            <img src="https://res.cloudinary.com/dgomw715r/image/upload/v1652983721/ProjectImages/IMG_20181016_135255_kccxuq.jpg" className="responsive-img"/>
            </span>
            <div>
              <span>
              <h4>name</h4>
              </span>
              <span>
               <p>user</p>
              </span>
              </div>
              </div>
              <button className="follow-btn px-1 py-0-25">+ Follow</button>
        </div>

    </section>
    )
}