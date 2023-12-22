import React, {Fragment} from "react";
import'./Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar , faHeart } from '@fortawesome/free-solid-svg-icons';
import shoe1 from "./image/shoes1.png";
import shoe2 from "./image/shoes2.png";
import shoe3 from "./image/shoes3.png";
import shoe4 from "./image/shoes4.png";
import shoe5 from "./image/shoes5.png";
import shoe6 from "./image/shoes6.png";
const Products =()=>{
    return(
        <Fragment>

            <div className="container2">
                <h1 className="title">products</h1>
                <div className="cards">
                    <div className="card1">
                        <div className="heart" ><FontAwesomeIcon icon={faHeart}/></div>
                        <div className="img">
                            <img src={shoe1} />
                        </div>
                        <div className="text">
                            <h1>Nike</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <p className="price">$9</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                            </ul>
                            <a href="#">Add To Cart</a>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="heart" ><FontAwesomeIcon icon={faHeart}/></div>
                        <div className="img">
                            <img src={shoe2}/>
                        </div>
                        <div className="text">
                            <h1>Nike</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <p className="price">$35</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                            </ul>
                            <a href="#">Add To Cart</a>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="heart" ><FontAwesomeIcon icon={faHeart}/></div>
                        <div className="img">
                            <img src={shoe3}/>
                        </div>
                        <div className="text">
                            <h1>Nike</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <p className="price">$9</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                            </ul>
                            <a href="#">Add To Cart</a>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="heart" ><FontAwesomeIcon icon={faHeart}/></div>  
                        <div className="img">
                            <img src={shoe4}/>
                        </div>
                        <div className="text">
                            <h1>Nike</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <p className="price">$9</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                            </ul>
                            <a href="#">Add To Cart</a>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="heart" ><FontAwesomeIcon icon={faHeart}/></div>
                        <div className="img">
                            <img src={shoe5}/>
                        </div>
                        <div className="text">
                            <h1>Nike</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <p className="price">$9</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                            </ul>
                            <a href="#">Add To Cart</a>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="heart" ><FontAwesomeIcon icon={faHeart}/></div>
                        <div className="img">
                            <img src={shoe6}/>
                        </div>
                        <div className="text">
                            <h1>Nike</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <p className="price">$9</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                                <li><FontAwesomeIcon icon={faStar}/></li>
                            </ul>
                            <a href="#">Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Products;