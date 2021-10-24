import React,{useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import "../../customer/sign.css"
const VendorNavbar = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('vendorprofile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation ();
    const logout = () => {
        dispatch({type:"LOGOUT"});
        history.push("/")
        setUser(null)
    }
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('vendorprofile')))
    },[location])
    
    return (
        <div>
            {user?
            <>
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Garbage Hauler System</a>
                    <button style={{color:"black"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{color:"black"}} className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href='/vendor/booking'>Orders</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href='/vendor/accepted-orders'>Accepted orders</a>
                        </li>
                    </ul>
                    <ul>
                    <li className="nav-item dropdown " style={{marginRight:"100px"}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user" style={{fontSize:"28px"}}></i>
                        </a>
                        <div className="dropdown-menu " style={{backgroundColor:"black", padding:"20px"}} aria-labelledby="navbarDropdown">
                            <div className='mb-3'>
                                <h7 style={{color:"white"}} > {user.json.name}</h7> <br/>
                            </div>
                            <div className='mb-3'>
                                <h7 style={{color:"white"}} > {user.json.email}</h7> <br/>
                            </div>
                        </div>
                    </li>
                    </ul>
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
export default VendorNavbar;

