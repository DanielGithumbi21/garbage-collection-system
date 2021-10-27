import React, { useEffect,useState } from 'react'
import AdminNavbar from '../Navbar/adminNavbar/Navbar';
import axios from "axios"
import { useHistory } from 'react-router';
import "./Admin.css"

const BookingsData = () => {
    const options = { year: "numeric", month: "long", day: "numeric",hour: '2-digit', minute: '2-digit' }
    const [bookingsData,setBookingData] = useState([]);
    const history = useHistory();
  
    useEffect (() => {
        getData ()
    },[])
    const getData = async () => {
        try{
            const response = await fetch ("http://localhost:5000/admin/bookings")
        const result = await response.json();
        console.log(result.body)
        setBookingData(result.body)
        }
        catch (error) {
            console.log(error)
        }
        
        
    }
    const onDelete = async (id) => {
            axios.delete (`http://localhost:5000/admin/bookings/${id}`)
            history.go(0)
    }
    
    return(
        <div>
            <AdminNavbar/>
            <div className='container graphs'>
                <h5 className='text-center mb-3'>Bookings Information</h5>
            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">details</th>
      <th scope="col">Accepted</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  {bookingsData.map(booking => (
      <tbody>
      <tr>
        <td >{new Date(booking.date).toLocaleDateString(undefined, options)}</td>
        <td>{booking.details}</td>
        <td>{JSON.stringify(booking.status)}</td>
        <td>
            <div className=' m-2 '>
            <button className='btn btn-sm btn-danger' onClick={() => onDelete(booking._id)}>Delete</button>
            </div>
        </td>
      </tr>
    </tbody>
  ))}
  
</table>
            </div>
        </div>
    )
}
export default BookingsData;