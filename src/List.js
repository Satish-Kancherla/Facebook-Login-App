import React from 'react'
import { useState,useEffect} from "react";
import axios from "axios";
import { Link} from 'react-router-dom';
import "./List.css";


const List = () => {

    const[data,setData] = useState([]);
    const[content,setContent]= useState(
        {firstname:"",surname:"",mobile:"",password:"",date:"",month:"",year:"",gender:""});


    useEffect(()=>{
        fetchData();
    },[])
   
    const fetchData = async()=>{
        try{
            const result = await axios("http://localhost:8081/login");
            setData(result.data);
        } catch (err) {
            console.log("something Wrong");
        }
    }
   
    let name,values;
    const handleInputs = (e) => {
        
        name = e.target.name;
        values= e.target.value;

        setContent({...content,[name]:values});
    }  
  return (
    <div className='adminpage2' >
        <h1>Facebook List</h1>
          
    <div className="adminpage2-content" >
        <table className='adminpage2-table'>
            <thead >
                <tr>
                <th className='heading2' name="firstname">First Name </th>
                <th className='heading2' name="surname">Surname </th>
                <th className='heading2' name="mobile">Email/Mobile </th>
                <th className='heading2' name="password">Password </th>
                <th className='heading2' name="date">Date </th>
                <th className='heading2' name="month">Month </th>
                <th className='heading2' name="year">Year </th>
                <th className='heading2' name="gender">Gender </th>
                <th className='heading2' ></th>
                </tr>
            </thead >
            <tbody>
                {data.map((user,id) => {
                    
                    return (
                        <tr key={id}>
                            <td className='data' name="firstname" value={content.firstname} onChange={handleInputs}>{user.firstname}</td>
                            <td className='data' name="surname" value={content.surname} onChange={handleInputs}>{user.surname}</td>
                            <td className='data' name="mobile"  value={content.mobile} onChange={handleInputs}>{user.mobile}</td>
                            <td className='data' name="password"  value={content.password} onChange={handleInputs}>{user.password}</td>
                            <td className='data' name="date"  value={content.date} onChange={handleInputs}>{user.date}</td>
                            <td className='data' name="month"  value={content.month} onChange={handleInputs}>{user.month}</td>
                            <td className='data' name="year" value={content.year} onChange={handleInputs}>{user.year}</td>
                            <td className='data' name="gender"  value={content.gender} onChange={handleInputs}>{user.gender}</td>
                            <td>
                                <Link to={`/update/${user.id}`}>
                                    <button >Edit</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        
      
    </div>

</div>
  )
}

export default List