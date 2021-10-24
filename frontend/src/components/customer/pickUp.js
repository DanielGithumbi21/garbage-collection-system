import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import CustomerNavbar from '../Navbar/customerNavbar/Navbar';
import "./sign.css"
const SchedulePickUp = () => {
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

                
                <div className='card text-center row' style={{width:"15rem"}}>
                    <div >
                    <img src="https://i.pinimg.com/736x/cd/cc/b0/cdccb0f1158ad41f0217496ab2757e9a.jpg" class="img-fluid" alt="Responsive"/>
                        <h5>Name: </h5><p>{vendor.name}</p>
                        <h5>Company: </h5><p>{vendor.company}</p>
                        <h5>Location: </h5><p>{vendor.location}</p>
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

