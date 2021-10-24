import React,{useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import "../../customer/sign.css"
const AdminNavbar = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('adminprofile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation ();
    const logout = () => {
        dispatch({type:"LOGOUT"});
        history.push("/admin")
        setUser(null)
    }
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('adminprofile')))
    },[location])
    
    return (
        <div>
            {user?
            <>
           
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Garbage Hauler System</a>
                    <button style={{color:"black"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{color:"black"}} className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" href='/admin/dashboard'>Dashboard</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href='/admin/vendors'>Vendors</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href='/admin/customers'>Customers</a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link" href='/admin/bookings'>Bookings</a>
                    </li>
                    
                    
                </ul>
                <div className='mb-3'>
                <h7 style={{color:"white"}} >Welcome, admin</h7> <br/>
                </div>
               <div>
               <button className="btn btn-danger btn-md" onClick={logout} >Logout</button>
               </div>
                </div>
                    </div>
                    
            </nav>
            </>
           
             :null }
        </div>
    )
}
export default AdminNavbar;

