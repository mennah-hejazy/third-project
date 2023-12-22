import React, { Fragment }  from "react";

import './Footer.css';

const Footer =()=>{
    return(
        <Fragment>
            <div className="footer">
                <div className="footer-main">
                
                    <div className="foot">
                        <h1 className="foot-title">Contact</h1>
                    
                            <a href="#" className="center">123/Newyourk/USA</a>
                            <a href="#" className="center" >+2123456789</a>
                            <a href="#" className="center">contact@gmail.com</a>
                            <a href="#" className="center" > </a>
                    </div>
                
                    <div className="foot">
                        <h1 className="foot-title">Get Help</h1>
                
                            <a href="#" className="center">FAQ</a>
                            <a href="#" className="center">Shipping</a>
                            <a href="#" className="center">Returns</a>
                            <a href="#" className="center">Payment</a>
                    
                    </div>
                    <div className="foot">
                        <h1 className="foot-title">Our Stores</h1>
                    
                        
                            <a href="#" className="center">USA</a>
                            <a href="#" className="center">Japan</a>
                            <a href="#" className="center">England</a>
                            <a href="#" className="center">France</a>
                    
                    </div>
        
                    <div className="foot">
                        <h1 className="foot-title">Newsletter</h1>
                    
                            <input placeholder="your email id here" type="text" className="center"/>
                            <a href="#"className="center" className="subscribe">Subscribe</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;