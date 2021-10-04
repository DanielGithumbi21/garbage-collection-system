import React, { useState } from 'react';
import "./sign.css"

const CustomerSign = () => {
    const [isSignUp,setIsSignUp] = useState(true);
    const switchmode = () => {
        setIsSignUp((prev) => !prev)
    }
    return (
        <div className="container sign mt-5">
            <div className="row padding">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    {isSignUp?<>  
                    <div className="text-center icon">
                     <i className="fa fa-user "></i>
                     </div> 
                    <h3 className="text-center mb-3">Customer Registration</h3>
                    </>:
                     <> 
                     <div className="text-center icon">
                     <i className="fa fa-user login-header "></i>
                     </div> 
                     <h3 className="text-center">Customer Login</h3>
                 </>}
                    {isSignUp?
                    <form className="mt-3">
                    <div className="row padding">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label for="floatingInput">First Name</label>
                    </div>  
                    </div>
                    <div className="col-lg-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label for="floatingInput">Last Name</label>
                    </div> 
                    </div>
                    </div>
                    <div className="row padding">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label for="floatingInput">Email Address</label>
                    </div>  
                    </div>
                    <div className="col-lg-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label for="floatingInput">Phone Number</label>
                    </div> 
                    </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label for="floatingPassword">Address</label>
                    </div>
                     <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-primary btn-md">Register</button>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-outline btn-md" onClick={switchmode}>Already have an account,click here to login</button>
                    </div>
                    </form>
                    :<form className="login">
                        <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label for="floatingPassword">Email</label>
                    </div>
                     <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-primary btn-md">Log In</button>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-outline btn-md" onClick={switchmode}>Don't have an account,click here to Register</button>
                    </div>
                    </form>}
                </div>
                <div className="col-lg-6">
                <img src="https://images.pexels.com/photos/7048045/pexels-photo-7048045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt="Responsive"/>
                </div>
            </div>
        </div>
    )
}
export default CustomerSign;