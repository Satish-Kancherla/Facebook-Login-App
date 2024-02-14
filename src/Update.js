import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";
import {Link,useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const[data,setData]=useState({
        firstname:"",surname:"",mobile:"",password:"",date:"",month:"",year:"",gender:""
    });
    

    const handleInput = (e) => {
        setData((prev)=>({...prev,[ e.target.name]:e.target.value}));
    };

    useEffect(()=>{
        axios.get("http://localhost:8081/logindetails/"+id)
        .then(res =>{
            setData(res.data[0]);
        })
        .catch(err => console.log(err));
    },[id]);
    console.log(data);
    const handleUpdate= async (e) => {
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8081/login/${id}`, data);
            console.log("Success")
        }catch(err){
            console.log(err);
        } 
    };   
    const handleDelete= async (e) => {
        e.preventDefault();
        try{
            await axios.delete(`http://localhost:8081/login/${id}`, data);
            console.log("Deleted")
        }catch(err){
            console.log(err);
        } 
    };  


  return (
    <div className="container">
            <h1>Update Details</h1>
            <form >
            <div className='signup-form'>
            <div className='form-content'>
                <h3>Update account</h3>
                
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
                    </div>
                    <div className='delete'>
                    <div className='signup-button'>
                    <button onClick={handleUpdate}><Link to="/list">Update</Link></button>
                    </div>
                    <div className='delete-button'>
                    <button onClick={handleDelete}><Link to="/list">Delete</Link></button>
                    </div>
                    </div>
                    
            </div>
            </div>
            </form>
        </div>  )
  }
export default Update;