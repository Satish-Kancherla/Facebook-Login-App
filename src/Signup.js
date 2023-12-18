import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const LoginPage = () => {

const[data,setData]=useState({
    firstname:"",surname:"",mobile:"",password:"",date:"",month:"",year:"",gender:""
});

let name,value;
const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setData({...data,[name]:value});
}

  return (
        <div className="container">
            <h1>facebook</h1>
            <form >
            <div className='form-content'>
                <h3>Create a new account</h3>
                <h4>It's quick and easy</h4>
                <hr/>
                    <div className='first-row'>
                        <div className="firstname">
                            <input type='text' name='firstname' placeholder='First name' size={30} required value={data.firstname} onChange={handleInput} />
                        </div>
                        <div className="surname">
                            <input type='text' name='surname' placeholder='Surname' value={data.surname} onChange={handleInput} size={23} required/>
                        </div>
                    </div>
                    <div className='remain-rows'>
                        <div>
                        <input type="text" name='mobile' placeholder='Mobile number or email address'value={data.mobile} onChange={handleInput} size={60} height={30} required/>
                        </div><div>
                        <input type="password" name='password' placeholder='New password'value={data.password} onChange={handleInput} size={60}required/>
                        </div><div>
                        <label  >Date of birth :</label>
                        <select className='date' name="date"  value={data.date} onChange={handleInput} >
                        <option >01</option><option >02</option><option >03</option><option >04</option><option >05</option>
                        <option >06</option><option >07</option><option >08</option><option >09</option><option >10</option>
                        <option >11</option><option >12</option><option >13</option><option >15</option>
                        <option >16</option><option >17</option><option >18</option><option >19</option><option >20</option>
                        <option >21</option><option >22</option><option >23</option><option >24</option><option >25</option>
                        <option >26</option><option >27</option><option >28</option><option >29</option>
                        <option >30</option><option >31</option>
                        </select>
                        <select className='month' name="month"  value={data.month} onChange={handleInput} >
                            <option value="jan">Jan</option><option value="Feb">Feb</option><option value="Mar">Mar</option><option value="Apr">Apr</option>
                            <option value="May">May</option><option value="jun">Jun</option><option value="Jul">Jul</option><option value="Aug">Jan</option>
                            <option value="Sep">Sep</option><option value="Oct">Oct</option><option value="Nov">Nov</option><option value="Dec">Dec</option>
                        </select>
                        <select className='year' name="year"  value={data.year} onChange={handleInput} >
                        <option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1992">1992</option><option value="1993">1993</option>
                        <option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option>
                        <option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option>
                        </select>
                        </div><div>
                        <label>Gender :</label>
                        <input type="radio" className='gender' name='gender'  value="Male" onChange={handleInput}/>Male
                        <input type="radio" name='gender'  value="Female" onChange={handleInput} className='gender'/>Female
                        <input type="radio"  name='gender'  value="Custom" onChange={handleInput} className='gender'/>Custom 
                        </div>
                    </div>
                    <div className='para'>
                        <p>People who use our service may have uploaded your contact information to Facebook. <a href="https://www.facebook.com/help/637205020878504"  target="_blank">Learn more</a> </p>
                        <br/>
                        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                    </div>
                    <div className='signup-button'>
                        <button>Sign up</button>
                    </div>
                    <div className="sign-link">
                        <NavLink to="/">Already have an account?</NavLink>
                    </div>
            </div>
            </form>
        </div>
  )
}

export default LoginPage;