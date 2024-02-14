import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import LoginPage from "./Signup";
import List from "./List";
import Update from "./Update";

const Main = () => {
    return ( 
        <div>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<LoginPage />}/>
            <Route path="/list" element={<List />}/>
            <Route path="/update/:id" element={<Update />}/>
        </Routes>
        </div>
     );
}
 
export default Main;