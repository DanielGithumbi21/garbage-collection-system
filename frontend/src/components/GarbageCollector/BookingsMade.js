import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import VendorNavbar from '../Navbar/vendorNavbar/Navbar';
const BookingsMade = () => {
    const options = { year: "numeric", month: "long", day: "numeric",hour: '2-digit', minute: '2-digit' }
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('vendorprofile')));
    const location = useLocation ();
    const [data,setData] = useState([]);
    const history = useHistory()
    useEffect (() => {
        getData ()
    },[])
    const getData = async () => {
        try{
            const response = await fetch (`http://localhost:5000/vendor/book/${user.json._id}`)
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
        setUser(JSON.parse(localStorage.getItem('vendorprofile')))
    },[location])
    
     useEffect (() => {
        onClick()
     },[])
     const onClick =  () => {
        data.map ((customer ) => {
            
               axios.patch(`http://localhost:5000/vendor/book/${customer.vendor}`)
               history.go(0)
               return (
                   <p>Order accepted</p>
               )
           
        })
       
      
    }
    return (
        <div>
            <VendorNavbar/>
            <div className="container booking mt-5">
                {data.message?<div>
                    <h5>Currently there are no orders</h5>
                </div>:
                <> 
                <h4 className='text-center'>Here are your orders, {user.json.name}</h4>
            <div className='row padding' >
                         
            {data.map(vendor => ( 
                <>
                 {vendor.status === true?  
                    <div className='card text-center row' style={{width:"21rem"}}>
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
                    :<div className='card text-center row' style={{width:"20rem"}}>
                    <div >
                    <h6 className='mb-2'>customer: </h6><p> {vendor.customer.email}</p>
                    <h6 className='mb-2'>Date: </h6><p>{new Date(vendor.date).toLocaleDateString(undefined, options)}</p>                            <p className='lead'> {vendor.details}</p>
                            <div className='m-2'>
                        <>
                        
                        <button className='btn btn-md btn-info m-2' onClick={onClick }  >Accept</button>
                       
                        
                        <button className='btn btn-md btn-danger' >Decline</button>
                        
                        </>
                        </div>
                        
                    </div>
                    
                </div>
                }
                    </>
    
    ))}
    </div>
    </>
    }




             </div>
        </div>

    )
}
export default BookingsMade;

