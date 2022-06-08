import {ToastWrapper} from "./utils/ToastWrapper";
import {AllRoutes} from "./routes/AllRoutes";
import {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
// import { getAllUsers } from "./pages/profile/userSlice";
import { getAllUsers,getUserData } from "./redux/authSlice";
import "./App.scss";
function App() {
  const dispatch=useDispatch();
  const {token}=useSelector((state)=>state.auth);
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getUserData());
}, [dispatch,token])
  return (
    <div className="App">
      <ToastWrapper/>
      <AllRoutes/>
    </div>
  );
}

export default App;
