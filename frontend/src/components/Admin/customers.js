import React, { useEffect,useState } from 'react'
import AdminNavbar from '../Navbar/adminNavbar/Navbar';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from "axios"
import "./Admin.css"

const CustomersData = () => {
    const [customerData,setCustomerData] = useState([]);
    const history = useHistory();
  
    useEffect (() => {
        getData ()
    },[])
    const getData = async () => {
        try{
            const response = await fetch ("http://localhost:5000/admin/customers")
        const result = await response.json();
        console.log(result.body)
        setCustomerData(result.body)
        }
        catch (error) {
            console.log(error)
        }
        
        
    }
    const onDelete = async () => {
        customerData.map ((customer) => {
            axios.delete (`http://localhost:5000/admin/customers/${customer._id}`)
            
        })
    }
    const onUpdate = async (id) => {
            localStorage.setItem("customerupdateid",JSON.stringify(id))
            console.log(id)
    }
    return(
        <div>
            <AdminNavbar/>
            <div className='container graphs'>
                <h5 className='text-center mb-3'>Customers Information</h5>
            <table class="table table-dark">
  <thead>
    <tr>
    <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone number</th>
      <th scope="col">address</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  {customerData.map(customer => (
      <tbody>
      <tr>
        <th >{customer.name}</th>
        <td>{customer.email}</td>
        <td>{customer.phone_number}</td>
        <td>{customer.address}</td>
        <td>
            <div className=' m-2 '>
            <Link to="/admin/customers/update">
            <button className='btn btn-sm btn-info m-2' onClick={onUpdate(customer._id)}>Update</button>
            </Link>
            <button className='btn btn-sm btn-danger m-2' onClick={onDelete}>Delete</button>
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
export default CustomersData;