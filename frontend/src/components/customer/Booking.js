import React,{useState,useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router';
import "./sign.css"

const CustomerBooking = () => {
    const [currentvendorName,setCurrentvendorName] = useState(JSON.parse(localStorage.getItem('currentvendor')));
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    useEffect (() => {
        // const token =user?.token;
        setCurrentvendorName(JSON.parse(localStorage.getItem('currentvendor')))
    },[location])
    const handleChange = (e) => {
        e.preventDefault ()
    }
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    
    return (
        <div>
            <Navbar/>
            <div className='container vendor-booking mt-2'>
                <h5 className='text-center'>Make a booking from, {currentvendorName.name}</h5>
                <div className='card'>
            <form >
            <div class="form-floating mb-3">
                        <input type="text" value={user.address} onChange={handleChange} class="form-control" id="floatingPassword" placeholder="Kikuyu" name="address" required/>
                        <label for="floatingPassword">Address</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" value={user.phone_number} onChange={handleChange} class="form-control" id="floatingInput" placeholder="07********" name='phone_number' required/>
                        <label for="floatingInput">Phone Number</label>
                    </div> 
                   
                    <div class="form-floating mb-3">
                        <textarea rows="3" type="text" onChange={handleChange} class="form-control" id="floatingInput" placeholder="07********" name='phone_number' required/>
                        <label for="floatingInput">More Information</label>
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