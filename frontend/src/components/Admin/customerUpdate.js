import React, { useState,useEffect} from 'react';
import { useHistory,useLocation} from 'react-router';
import { Link } from 'react-router-dom';
import "./Admin.css"
const CustomerUpdate = () => {
    const initialState = {name:'',email:'',phone_number:'',address:''}
    const [formData, setFormData] = useState(initialState)
    const [errors,setErrors] = useState();
    const [customerid,setCustomerid] = useState(JSON.parse(localStorage.getItem('customerupdateid')));

    
    const history = useHistory ();
    const location = useLocation ();
   
    const handleChange =(e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    useEffect (() => {
        // const token =user?.token;
        setCustomerid(JSON.parse(localStorage.getItem('customerupdateid')))
    },[location])
    const onSubmit = (e) => {
        e.preventDefault()
       
            fetch (`http://localhost:5000/admin/customers/${customerid}`, {
                method:"PATCH",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify (formData)
            })
            .then(res => res.json())
            .then(json => {
                console.log("json",json)
                if (json.message) {
                    history.push("admin")
                    setErrors(json.message)
                    
                        
                
                } else {
                    localStorage.setItem("adminprofile",JSON.stringify({json}))
                    history.push("/admin/customers")
                }
            })
        
       
        
    }
   
    return (
        <div className="container update mt-5">
             {errors?
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
         {errors}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
            :""}
             
                     <Link to="/admin/customers">
                     <div className=" mb-3">
                        <button className="btn btn-primary btn-md">Go back</button>
                    </div>
                    </Link>
                    <h3 className="text-center mb-3">Customer details Update</h3>
                   <form className="login" onSubmit={onSubmit}>
                   <div class="form-floating mb-3">
                        <input type="text" onChange={handleChange} class="form-control" id="floatingPassword" placeholder="name@example.com" name='name' />
                        <label >Name</label>
                    </div>
                        <div class="form-floating mb-3">
                        <input type="email" onChange={handleChange} class="form-control" id="floatingPassword" placeholder="name@example.com" name='email' />
                        <label for="floatingPassword">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" onChange={handleChange} class="form-control" id="floatingPassword" placeholder="name@example.com" name='phone_number' />
                        <label for="floatingPassword">Phone number</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" onChange={handleChange} class="form-control" id="floatingPassword" placeholder="name@example.com" name='address' />
                        <label for="floatingPassword">Address</label>
                    </div>
                    
                    <div className="text-center mb-3">
                        <button className="btn btn-primary btn-md">Update</button>
                    </div>
                    </form>
                </div>
        
       
    )
}
export default CustomerUpdate;
