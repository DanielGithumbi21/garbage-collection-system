import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import VendorNavbar from '../Navbar/vendorNavbar/Navbar';
const PaymentsMade = () => {
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
            const response = await fetch (`http://localhost:5000/vendor/pay/${user.json.result._id}`)
        const result = await response.json();
        console.log(result)
        setData(result)
        }
        catch (error) {
            console.log(error)
        }
        
    }
   
     const onClick =  (id) => {
            axios.patch(`http://localhost:5000/vendor/pay/${id}`)
            history.go(0)
       
    }

    return (
        <div>
            <VendorNavbar/>
            <div className="container booking mt-5">
                {data.message?<div>
                    <h5>Currently there are no Payments</h5>
                </div>:
                <> 
                <h4 className='text-center'>Here are your Payments, {user.json.result.name}</h4>
            <div className='row padding' >
                         
            {data.map(vendor => ( 
                <>
                 {vendor.received === true?  
                    <div className='card row' style={{width:"20rem"}}>
                    <div >
                        <h6 className='text-center mb-3'>Payment</h6>
                    <p className="lead">
                        {vendor._id} confirmed, payment of {vendor.amount} has been made to your {vendor.type} account by {vendor.customer.name} on <p>{new Date(vendor.createdAt).toLocaleDateString(undefined, options)}</p>
                    </p>
                        <div className='m-2'>
                        <>
                        <button className='btn btn-md btn-info m-2' disabled={true} >Accepted</button>                        
                        </>
                        </div>
                        
                    </div>
                    
                </div>
                    :<div className='card row' style={{width:"20rem"}}>
                    <div >
                        <h6 className='text-center mb-3'>Payment</h6>
                    <p className="lead">
                        {vendor._id} confirmed, payment of {vendor.amount} has been made to your {vendor.type} account by {vendor.customer.name} on <p>{new Date(vendor.createdAt).toLocaleDateString(undefined, options)}</p>
                    </p>
                            
                        <>
                        <div className='text-center'>
                        <button className='btn btn-md btn-info m-2' onClick={() => onClick (vendor._id)}  >Accept</button>                        
                        </div>
                        </>
                       
                        
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
export default PaymentsMade;

