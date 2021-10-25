import React,{useState,useEffect} from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import "./sign.css"
import CustomerNavbar from '../Navbar/customerNavbar/Navbar';

const AcceptedBookings = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('customerprofile')));
    const location = useLocation ();
    const [data,setData] = useState([]);
  console.log(user.json._id)
  useEffect (() => {
    getData ()
},[])
const getData = async () => {
    try {
        const response = await fetch (`http://localhost:5000/customer/book/${user.json.customer._id}`)
        const result2 = await response.json ();
        setData(result2)
        console.log(result2)
        } catch (error) {
            console.log(error)
        }
    
}
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('customerprofile')))
    },[location])
    
    return (
        <div>
            <CustomerNavbar/>
            <div className="container booking mt-5">
                {data.length === 0 ? <div><h5>Currently you do not have any accepted orders for now</h5></div>:<>
            <div className='row padding' >
                         
            {data.map(book => ( 
                <>
                 {book.status === true?  
                    <div className='card text-center row' style={{width:"20rem"}}>
                        <div >
                            <p>Your order number {book._id}  was received and accepted by {book.vendor.name}, please click on the payment button to continue to complete the payment</p>
                            <div className='m-2'>
                            <>
                           <Link to ="/customer/payment">
                            <button className='btn btn-md btn-success '  >Payment</button>
                            </Link>
                            </>
                            </div>
                        </div>
                    </div>
                    : "There is no accepted order"}
                    </>
    
    ))}
    
   

           
           
                </div>
                </>
}
             </div>
        </div>
    )
}
export default AcceptedBookings;

