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
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('vendorprofile')))
    },[location])
    useEffect (() => {
        getData ()
    },[])
    const getData = async () => {
        try{
            const response = await fetch (`http://localhost:5000/vendor/book/${user.json.result._id}`)
        const result = await response.json();
        console.log(result)
        setData(result)
        }
        catch (error) {
            console.log(error)
        }
        
    }
   
     const onClick =  (id) => {
            axios.patch(`http://localhost:5000/vendor/book/${id}`)
            history.go(0)
       
    }
    const onDelete = async (id) => {
        axios.delete (`http://localhost:5000/vendor/book/${id}`)
        history.go(0)
    }
    return (
        <div>
            <VendorNavbar/>
            <div className="container booking mt-5">
                {data.message?<div>
                    <h5>Currently there are no orders</h5>
                </div>:
                <> 
                <h4 className='text-center'>Here are your orders, {user.json.result.name}</h4>
            <div className='row padding' >
                         
            {data.map(vendor => ( 
                <>
                {
                    vendor.payed === true?
                    <>
                         <div className='card text-center row' style={{width:"21rem"}}>
                        <div >
                            
                            <h6 className='mb-2'>customer: </h6><p> {vendor.customer.email}</p>
                            <h6 className='mb-2'>Date: </h6><p>{new Date(vendor.date).toLocaleDateString(undefined, options)}</p>
                            <p className='lead'> {vendor.details}</p>
                            <div className='m-2'>
                            <>
                           
                            <button className='btn btn-md btn-danger ' disabled={true} >Accepted and paid</button>
                            
                            </>
                            </div>
                        </div>
                    </div>
                    </>:
                    <>
                         {vendor.status === true?  
                    <div className='card text-center row' style={{width:"21rem"}}>
                        <div >
                            
                            <h6 className='mb-2'>customer: </h6><p> {vendor.customer.email}</p>
                            <h6 className='mb-2'>Address: </h6><p> {vendor.customer.address}</p>
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
                    <h6 className='mb-2'>Address: </h6><p> {vendor.customer.address}</p>
                    <h6 className='mb-2'>Date: </h6><p>{new Date(vendor.date).toLocaleDateString(undefined, options)}</p>                            <p className='lead'> {vendor.details}</p>
                            <div className='m-2'>
                        <>
                        
                        <button className='btn btn-md btn-info m-2' onClick={() => onClick (vendor._id)}  >Accept</button>
                       
                        
                        <button className='btn btn-md btn-danger' onClick={() => onDelete (vendor._id)}  >Decline</button>
                        
                        </>
                        </div>
                        
                    </div>
                    
                </div>
                }
                    </>
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

