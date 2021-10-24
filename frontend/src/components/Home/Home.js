import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <div className="container banner">
            <h3  className="text-center mb-3">Garbage Hauler System</h3>
            <div className="row padding">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div>
                    <p><i className='fa fa-trash'></i> GM Garbage Collection services (bulky waste collection service in Nairobi, Kenya) is safe, affordable and convenient way to safely dispos off waste. Do you have bulky waste like fridges, building waste, garbage or anything else that requires a professional touch? Book a collection now to get your bulky waste collected. We have a package of one-off or contract jobs, depending on your needs.</p>
                    </div>         
                </div>
                <div className="col-lg-6">
                <div className="buttons">
                        <Link to="/garbage/sign">
                        <button className="btn home-btn btn-warning btn-lg mt-3 mb-3">Register as garbage collector</button>
                        </Link>
                    </div>
                    <div>
                    <Link to="/customer/sign">
                        <button className="btn home-btn btn-success btn-lg mb-3">Register as a customer</button>
                    </Link>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default Home;