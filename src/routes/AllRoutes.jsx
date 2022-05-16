import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Login, Bookmark, LikedPosts, Feed, Profile } from "../pages/index";
import { ProtectedRoutes } from "./ProtectedRoutes";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/feed" element={
        <ProtectedRoutes>
          <Feed />
        </ProtectedRoutes>
      } />
      {/* <Route path="/discover" element={<Feed/>}/> */}
      <Route path="/bookmark" element={
        <ProtectedRoutes>
          <Bookmark />
        </ProtectedRoutes>
      } />
      <Route path="/liked" element={
        <ProtectedRoutes>
          <LikedPosts />
        </ProtectedRoutes>
      } />
      <Route path="/profile" element={
        <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>
      } />
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  )
}