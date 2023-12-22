import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCar, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar=()=>{
    return(
        <Fragment>
            <nav>
            <div className="logo">
                <h1>Shoe<span>s</span></h1>
            </div> 
           <div className="navs">
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/products">Products</Link></li>
                <li><Link to ="/review">Review</Link></li>
                <li><Link to ="/services">Services</Link></li>
            </ul>
            </div>
            <div className="icons">
                <ul>
                    <li><FontAwesomeIcon icon={faHeart}/></li>
                    <li><FontAwesomeIcon icon={faCar}/></li>
                    <li><FontAwesomeIcon icon={faUser}/></li>
                </ul>
           </div>
            </nav>
           
        </Fragment>

    )
}
export default Navbar;