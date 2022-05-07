import {ToastWrapper} from "./utils/ToastWrapper";
import {AllRoutes} from "./routes/AllRoutes";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <ToastWrapper/>
      <AllRoutes/>
    </div>
  );
}

export default App;
