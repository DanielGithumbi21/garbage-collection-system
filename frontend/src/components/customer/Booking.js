import React,{useState,useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import { useHistory, useLocation } from 'react-router';
import "./sign.css"
import axios from 'axios';

const CustomerBooking = () => {
    const history = useHistory()
    
    const [currentvendorName,setCurrentvendorName] = useState(JSON.parse(localStorage.getItem('currentvendor')));
    const [currentvendorId,setCurrentvendorId] = useState(JSON.parse(localStorage.getItem('currentvendorId')));
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   
    const location = useLocation();
    useEffect (() => {
        // const token =user?.token;
        setCurrentvendorName(JSON.parse(localStorage.getItem('currentvendor')))
    },[location])
    useEffect (() => {
        // const token =user?.token;
        setCurrentvendorId(JSON.parse(localStorage.getItem('currentvendorId')))
    },[location])
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    const initialState = {date:"",details:""}
    const [formData, setFormData] = useState(initialState)
    const handleChange =(e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // dispatch(customerBooking(formData,history))
        const vendor = currentvendorId.id;
        const customer = user._id
        const date = formData.date
        const details = formData.details

        const post = {
            date,
            details,
            vendor,
            customer
        }
        console.log(post)
        console.log(initialState)
        axios.post(`http://localhost:5000/customer/book/${customer}`,post)
        .then(() => console.log("successful"))
        alert("The request has been sent to " + currentvendorName.name)
        history.push("/customer/pickup")
        
    }
    
    return (
        <div>
            <Navbar/>
            <div className='container vendor-booking mt-2'>
                <h5 className='text-center'>Make a booking from, {currentvendorName.name}</h5>
                <div className='card'>
            <form onSubmit={onSubmit} >
            <div class="form-floating mb-3">
                        <input type="text"  onChange={handleChange} class="form-control" id="floatingPassword" placeholder="Kikuyu" name="date" required/>
                        <label for="floatingPassword">Date</label>
                    </div>
                   
                    <div class="form-floating mb-3">
                        <textarea rows="3" type="text" onChange={handleChange} class="form-control" id="floatingInput" placeholder="07********" name='details' required/>
                        <label for="floatingInput">Details</label>
                    </div> 
                   
                    <div className="text-center mb-3">
                        <button className="btn btn-primary btn-md">Book</button>
                    </div>
                   
                    </form>
            </div>
            </div>
        </div>
    )
}

export default CustomerBooking;