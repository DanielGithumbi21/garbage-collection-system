import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <div className="container banner">
            <h3  className="text-center mb-3">Garbage Hauler System</h3>
            <div className="row padding">
                <div className="col-md-6 col-lg-6 col-sm-12">
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
                <div className="col-lg-6">
                    <img src="https://images.pexels.com/photos/7048045/pexels-photo-7048045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt="Responsive"/>
                </div>
            </div>
        </div>
    )
}
export default Home;