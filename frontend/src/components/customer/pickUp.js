import React,{useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const SchedulePickUp = () => {
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
           
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Garbage Hauler System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/products">
                        <li className="nav-item">
                        Home
                        </li>
                        </Link>
                        <Link to="/dashboard">
                        <li className="nav-item">
                        pick up requests
                        </li>
                        </Link>
                    </ul>
                    <button className="btn btn-danger btn-md" onClick={logout} >Logout</button>
                    </div>
                    
                    
                </div>
            </nav>
            :<p>{user.message}</p>}
        </div>
    )
}
export default SchedulePickUp;

