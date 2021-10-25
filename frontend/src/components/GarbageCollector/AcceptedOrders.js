import React,{useState,useEffect} from 'react';
import { useLocation } from "react-router";
import VendorNavbar from '../Navbar/vendorNavbar/Navbar';
const AcceptedOrders = () => {
    const options = { year: "numeric", month: "long", day: "numeric",hour: '2-digit', minute: '2-digit' }
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('vendorprofile')));
    const location = useLocation ();
    const [data,setData] = useState([]);
  console.log(user.json._id)

  useEffect (() => {
    getData ()
},[])
const getData = async () => {
    try {
        const response = await fetch (`http://localhost:5000/vendor/book/${user.json.vendor._id}`)
        const result2 = await response.json ();
        setData(result2)
        console.log(result2)
        } catch (error) {
            console.log(error)
        }
    
}
    
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('vendorprofile')))
    },[location])
    
    return (
        <div>
            <VendorNavbar/>
            <div className="container booking mt-5">
                {data.length < 1 ? <div><h5>You do not have any accepted orders for now</h5></div>:<>
                <h4 className='text-center'>Here are your orders, {user.json.vendor.name}</h4>
            <div className='row padding' >
                         
            {data.map(vendor => ( 
                <>
                 {vendor.status === true?  
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
                    : "You do not have any accepted orders"}
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

