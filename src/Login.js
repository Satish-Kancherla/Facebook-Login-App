import "./Signup";
import { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

<head>
    <title>Log in to Facebook</title>
</head>


const Login= () => {

    const[content,setContent] = useState({
        mobile:"",password:"" 
    });
    // const[errors,setErrors] = useState({});

    // const navigate =useNavigate();

    let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setContent({...content,[name]:value});
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8081/log',content)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        /* setErrors(content);
        if (errors.mobile=== "" && errors.password===""){
        axios.post('http://localhost:8081/log',content)
        .then(res => {
            if(res.data ==="Success"){
                navigate("/")
            }else{
                alert("No record found");
            }
         })
        .catch(err => console.log(err));
        } */
    //  axios.get("http://localhost:8081/login",content)
    //         .then(res=>{
    //             if(res.data==="exist"){
    //                 alert("success")
    //             }
    //             else if(res.data==="notexist"){
    //                 alert("User have not sign up")
    //             }
    //         })
    //         .catch(e=>{
    //             alert("wrong details")
    //             console.log(e);
    //         })
        }

    return ( 
        <div className="login-container">
            <h1>facebook</h1>
            <form>
                <div className="login-form">
                <div className="login-content">
                    <h3>Log in to Facebook</h3>
                    <div className="login-data">
                        <div>
                            <input type="text" name="mobile" placeholder="Email address or phone number"value={content.email} onChange={handleInputs} size={32}/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" value={content.password} onChange={handleInputs} size={32}/>
                        </div>
                        <button onClick={handleSubmit}>Log in</button>
                    </div>
                    <div className="login-link">
                      
                       <NavLink to="/signup">Sign up for Facebook</NavLink>
                    </div>
                </div>
                </div>
            </form>
        </div>
     );
}
 
export default Login;