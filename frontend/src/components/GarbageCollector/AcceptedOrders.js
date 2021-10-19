import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import VendorNavbar from '../Navbar/vendorNavbar/Navbar';
const AcceptedOrders = () => {
    const options = { year: "numeric", month: "long", day: "numeric",hour: '2-digit', minute: '2-digit' }
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation ();
    const [data,setData] = useState([]);
    const [accepted,setAccepted] = useState()
  console.log(user.json._id)
 
    
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    
    return (
        <div>
            <VendorNavbar/>
            <div className="container booking mt-5">
                {data.length < 1 ? <div><h5>You do not have any accepted orders for now</h5></div>:<>
                <h4 className='text-center'>Here are your orders, {user.json.name}</h4>
            <div className='row padding' >
                         
            {data.map(vendor => ( 
                <>
                 {vendor.status == "true"?  
                    <div className='card text-center row' style={{width:"20rem"}}>
                        <div >
                            <h6 className='mb-2'>customer: </h6><p> {vendor.customer.email}</p>
                            <h6 className='mb-2'>Date: </h6><p>{new Date(vendor.date).toLocaleDateString(undefined, options)}</p>
                            <p className='lead'> {vendor.details}</p>
                            <div className='m-2'>
                            <>
                           
                            <button className='btn btn-md btn-success ' disabled={true} >Accepted</button>
                            
                            </>
                            </div>
                        </div>
                    </div>
                    : <h5>You do not have any accepted orders for now</h5>}
                    </>
    
    ))}
    
   

           
           
                </div>
                </>
}
             </div>
        </div>
    )
}
export default AcceptedOrders;

