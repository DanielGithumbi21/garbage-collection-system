import React,{useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import CustomerNavbar from '../Navbar/customerNavbar/Navbar';
import "./sign.css"
const SchedulePickUp = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation ();
    const [data,setData] = useState([]);
  
    useEffect (() => {
        getData ()
    },[])
    const getData = async () => {
        try{
            const response = await fetch ("http://localhost:5000/vendor/register")
        const result = await response.json();
        console.log(result)
        setData(result)
        }
        catch (error) {
            console.log(error)
        }
        
    }
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    
     const buttonHandler =  (id,name) => {
         localStorage.setItem("currentvendorId",JSON.stringify({id}))
         localStorage.setItem("currentvendor",JSON.stringify({name}))
     }
    return (
        <div>
            <CustomerNavbar/>
            <div className="container booking mt-5">
            <div className='row padding' >
                {data.map(vendor => (

                
                <div className='card text-center row' style={{width:"18rem"}}>
                    <div >
                        <h5>{vendor.name}</h5>
                        <h5>Located in {vendor.location}</h5>
                        <Link to ="booking">
                        <button className='btn btn-md btn-info' onClick={() => buttonHandler(vendor._id,vendor.name)}>Make a booking</button>
                        </Link>
                    </div>
                </div>
                
                ))}
                </div>
             </div>
        </div>
    )
}
export default SchedulePickUp;

