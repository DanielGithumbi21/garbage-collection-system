import React from 'react';
import { Link } from 'react-router-dom';

import "../../customer/sign.css"
import { Button } from '../../Home/Button';
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
                        <li className="nav-item">
                        <a className="nav-link" href='/banner'>Products</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href='/banner'>Services</a>
                        </li>
                    </ul>
                    
                    <Link to="/banner">
                            <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            >
                            Sign Up
                            </Button>
                    </Link>
                    </div>
                    
                    
                </div>
            </nav>
            </>
           
        </div>
    )
}
export default Navbar;

