import React,{useState,useEffect} from 'react';
import { useLocation } from "react-router";
import { Link,useHistory } from 'react-router-dom';
import "./sign.css"
import CustomerNavbar from '../Navbar/customerNavbar/Navbar';

const AcceptedBookings = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('customerprofile')));
    const location = useLocation ();
    const [data,setData] = useState([]);
    const history = useHistory ();

  useEffect (() => {
    getData ()
},[])
const getData = async () => {
    try {
        const response = await fetch (`http://localhost:5000/customer/book/${user.json.result._id}`)
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
    
    const onClick = (id) => {
        localStorage.setItem("VendorID",JSON.stringify({id}))
        history.push("/customer/payment")
    }
    
    
    return (
        <div>
            <CustomerNavbar/>
            <div className="container booking mt-5">
                {data.message? <div><h5>You have not made any booking</h5></div>:<>
            <div className='row padding' >
                    <>
                      {data.map(book => ( 
                       <>
                         {book.status === true  ?  
                            <div className='card text-center row' style={{width:"20rem"}}>
                                <div >
                                    <p>Your order number {book._id}  was received and accepted by {book.vendor.name}, please click on the payment button to continue to complete the payment</p>
                                    <div className='m-2'>
                                    <>
                                    <button className='btn btn-md btn-success ' onClick={ () => onClick(book.vendor._id)}  >Payment</button>
                                    </>
                                    </div>
                                </div>
                            </div>
                            : ""
                            }
                            </>
            
            ))}
            </>
                    
                
                
                
          
    
   

           
           
                </div>
                </>
}
             </div>
        </div>
    )
}
export default AcceptedBookings;

