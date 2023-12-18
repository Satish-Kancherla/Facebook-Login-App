import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import LoginPage from "./Signup";

const Main = () => {
    return ( 
        <div>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<LoginPage />}/>
        </Routes>
        </div>
     );
}
 
export default Main;