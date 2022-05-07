import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home,Login,Signup} from "../pages/index";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/label" element={
        <ProtectedRoutes>
          <Label />
        </ProtectedRoutes>
      } />
      <Route path="/user" element={
        <ProtectedRoutes>
          <UserProfile />
        </ProtectedRoutes>
      } />
      <Route path="/notes" element={
        <ProtectedRoutes>
          <Notes />
        </ProtectedRoutes>
      } />
      <Route path="/signup" element={<Auth />} />
      <Route path="/trash" element={
        <ProtectedRoutes>
          <Trash />
        </ProtectedRoutes>
      } />
      <Route path="/archive" element={
        <ProtectedRoutes>
          <Archive />
        </ProtectedRoutes>} /> */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
export default AllRoutes;