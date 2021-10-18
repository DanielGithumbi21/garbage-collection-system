import React,{useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "../../customer/sign.css"
const AdminNavbar = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
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
        setUser(JSON.parse(localStorage.getItem('profile')))
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
                    <h5 style={{color:"white"}}>Welcome, {user.json.first_name}</h5>
                    <button className="btn btn-danger btn-md" onClick={logout} >Logout</button>
                    </div>
                    
                    
                </div>
            </nav>
            </>
           
             :null }
        </div>
    )
}
export default AdminNavbar;

