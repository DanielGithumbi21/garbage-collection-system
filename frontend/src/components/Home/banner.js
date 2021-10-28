import { Link } from "react-router-dom";
import "../customer/sign.css"
const Banner = () => {
    
   
    return (
        <div className="container banner mt-5 ">
            <h5 className="text-center mb-3 mt-3">Garbage Hauler System</h5>
            <div className="row padding">
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="buttons">
                    <div>
                        <Link to ="/garbage/sign">
                        <button className="btn-primary btn-md btn">Vendor Registration</button>
                        </Link>
                    </div>
                    <div>
                    <Link to ="/customer/sign">
                        <button className="btn-warning btn-md btn">Customer Registration</button>
                    </Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <img src="https://images.pexels.com/photos/7048045/pexels-photo-7048045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt="Responsive"/>
                </div>
            </div>
        </div>
    )
}
export default Banner;
