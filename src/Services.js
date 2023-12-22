import React, {Fragment} from "react";
import './Services.css';
import truck from "./image/truck.PNG";
import refresh from "./image/refresh.PNG";
import headphone from "./image/headphone.PNG";
import loginImage from "./image/logshoes.png";
import google from "./image/google.png";
import facebook from "./image/facebook.png";
import twitter from "./image/twitter.png";

const Services =()=>{
    return(
        <Fragment>
            <div className="services">
                <h1 className="services-title">Our Services</h1>
                <div className="part-one">
                    <div className="services-sections">
                        <div className="services-image">
                            <img src={truck}/>
                        </div>
                        <div className="services-text">
                            <h2>Fast Delivery</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="services-sections">
                        <div className="services-image">
                            <img src={refresh}/>
                        </div>
                        <div className="services-text">
                            <h2>10 Days Replacement</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="services-sections">
                        <div className="services-image">
                            <img src={headphone}/>
                        </div>
                        <div className="services-text">
                            <h2>24 x 7 Support</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>   
                <div className="part-two">
                    <div className="login-image">
                        <img src={loginImage}/>
                    </div>
                    <div className="welcome">
                        <div className="login-title">
                            <h1>Welcome Back!</h1>
                        </div>
                        <div className="inputs">
                                
                            <label>User Name</label>
                            <input type="text" required placeholder="User Name"/>
                            <label>Bassword</label>
                            <input type="passward" required placeholder="Password"/>
                            <h2>Forget Password?</h2>
                            <button type="submit">Log In</button>
                            <div className="services-icons">
                            <a href="#" className="go"><img src={google}/></a>
                            <a href="#" className="fb"><img src={facebook}/></a>
                            <a href="#" className="tw"><img src={twitter}/></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </Fragment>

    )
}
export default Services;