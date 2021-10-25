import React from 'react';
import { Link } from 'react-router-dom';

import "../../customer/sign.css"
const Navbar = () => {
   
   
    return (
        <div>
            
            <>
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Garbage Hauler System</a>
                    <button style={{color:"black"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{color:"black"}} className="navbar-toggler-icon"></span>
                    </button>
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                        <li className="nav-item">
                        <a className="nav-link" href='/'>Home</a>
                        </li>
                        
                        
                    </ul>
                    <ul>
                    <li className="nav-item dropdown " >
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <button className="btn btn-primary btn-md">Sign In</button>
                        </a>
                        <div className="dropdown-menu " style={{backgroundColor:"black",width:"100"}} aria-labelledby="navbarDropdown">
                            <div className='mb-3'>
                                <Link to="/garbage/sign">
                                <button className='btn btn-md btn-primary'>Vendor</button>
                                </Link>
                            </div>
                            <div className='mb-3'>
                              <Link to = "/customer/sign">
                              <button className='btn btn-md btn-primary'>Customer</button>
                              </Link>
                            </div>
                            
                        </div>
                    </li>
                    </ul>
                    <ul>
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <button className="btn btn-primary btn-md">Sign Up</button>
                        </a>
                        <div className="dropdown-menu " style={{backgroundColor:"black"}} aria-labelledby="navbarDropdown">
                            <div className='mb-3'>
                                <Link to="/garbage/sign">
                                <button className='btn btn-md btn-primary'>Vendor</button>
                                </Link>
                            </div>
                            <div className='mb-3'>
                              <Link to = "/customer/sign">
                              <button className='btn btn-md btn-primary'>Customer</button>
                              </Link>
                            </div>
                            
                        </div>
                    </li>
                    </ul>
                    </div>
                    
                    
                </div>
            </nav>
            </>
           
        </div>
    )
}
export default Navbar;

