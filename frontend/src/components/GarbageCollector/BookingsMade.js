import React,{useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
const BookingsMade = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation ();
    const [data,setData] = useState([]);
  
    useEffect (() => {
        getData ()
    },[])
    const getData = async () => {
        try{
            const response = await fetch (`http://localhost:5000/vendor/book/${user.json._id}`)
        const result = await response.json();
        console.log(result)
        console.log(user._id)
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
            <Navbar/>
            <div className="container booking mt-5">
                <h4 className='text-center'>Here are your orders, {user.json.first_name}</h4>
            <div className='row padding' >
            {data.map(vendor => ( 
                <div className='card text-center row' style={{width:"20rem"}}>
                    <div >
                        <h6>customer: {vendor.customer.email}</h6>
                        <h6>Scheduled Date: {vendor.date}</h6>
                        <p className='lead'> {vendor.details}</p>
                        <div className='m-2'>
                        <Link to ="booking">
                        <button className='btn btn-md btn-info m-2' >Accept</button>
                        </Link>
                        <Link to ="booking">
                        <button className='btn btn-md btn-danger' >Decline</button>
                        </Link>
                        </div>
                    </div>
                </div>

))}
                </div>
             </div>
        </div>
    )
}
export default BookingsMade;

