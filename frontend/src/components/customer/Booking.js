import React,{useState,useEffect} from 'react';
import { useHistory, useLocation } from 'react-router';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./sign.css"
import axios from 'axios';
import CustomerNavbar from '../Navbar/customerNavbar/Navbar';

const CustomerBooking = () => {
    const history = useHistory()
    
    const [currentvendorName,setCurrentvendorName] = useState(JSON.parse(localStorage.getItem('currentvendor')));
    const [currentvendorId,setCurrentvendorId] = useState(JSON.parse(localStorage.getItem('currentvendorId')));
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('customerprofile')));
    const [startDate, setStartDate] = useState(new Date());
   
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
        setUser(JSON.parse(localStorage.getItem('customerprofile')))
    },[location])
    const initialState = {details:""}
    const [formData, setFormData] = useState(initialState)
    const handleChange =(e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const phoneNumber = user.json.result.phone_number;
    const email = user.json.result.email;
    const name = user.json.result.name;
    const address = user.json.result.address;

    const onSubmit = (e) => {
        e.preventDefault()
        // dispatch(customerBooking(formData,history))
        const vendor = currentvendorId.id;
        const customer = user.json.result._id
        const date = startDate
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
            <CustomerNavbar/>
            <div className='container vendor-booking mt-2'>
                <h5 className='text-center'>Make a booking from, {currentvendorName.name}</h5>
                <div className='card'>
            <form onSubmit={onSubmit} >
            <div class="form-floating mb-3">
                <input type="text" disabled={true} value={name} class="form-control" id="floatingInput" placeholder="name@example.com" name='type' required/>
                <label for="floatingInput">Name</label>
            </div> 
            <div class="form-floating mb-3">
                <input type="text" disabled={true} value={email} class="form-control" id="floatingInput" placeholder="name@example.com" name='type' required/>
                <label for="floatingInput">Email</label>
            </div> 
            <div class="form-floating mb-3">
                <input type="text" disabled={true} value={phoneNumber} class="form-control" id="floatingInput" placeholder="name@example.com" name='type' required/>
                <label for="floatingInput">Phone Number</label>
            </div> 
            <div class="form-floating mb-3">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="form-control date"
          />
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