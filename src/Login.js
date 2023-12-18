import "./Signup";
import { useState } from "react";
import {NavLink} from "react-router-dom";
<head>
    <title>Log in to Facebook</title>
</head>


const Login= () => {

    const[content,setContent] = useState({
        email:"",password:""
    });

    let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setContent({...content,[name]:value});
    }

    return ( 
        <div className="login-container">
            <h1>facebook</h1>
            <form>
                <div className="login-content">
                    <h3>Log in to Facebook</h3>
                    <div className="login-data">
                        <div>
                            <input type="text" name="email" placeholder="Email address or phone number"value={content.email} onChange={handleInputs} size={32}/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" value={content.password} onChange={handleInputs} size={32}/>
                        </div>
                        <button>Log in</button>
                    </div>
                    <div className="login-link">
                      
                       <NavLink to="/signup">Sign up for Facebook</NavLink>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Login;