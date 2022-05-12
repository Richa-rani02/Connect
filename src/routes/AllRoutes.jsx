import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {Login,Bookmark,LikedPosts,Feed,Profile} from "../pages/index";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/feed" element={<Feed/>}/>
      {/* <Route path="/discover" element={<Feed/>}/> */}
      <Route path="/bookmark" element={<Bookmark/>}/>
      <Route path="/liked" element={<LikedPosts/>}/>
      <Route path="/profile" element={<Profile/>}/>
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  )
}