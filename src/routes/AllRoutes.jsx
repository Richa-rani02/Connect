import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {Login,Home,Bookmark,LikedPosts,Feed} from "../pages/index";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/bookmark" element={<Home/>}/>
      <Route path="/liked" element={<LikedPosts/>}/>
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  )
}