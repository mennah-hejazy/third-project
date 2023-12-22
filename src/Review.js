import React , {Fragment} from "react";
import'./Reviews.css';
import reviewer1 from "./image/girl_dp1.jpg";
import reviewer2 from "./image/gir_dp2.jpg";
import reviewer3 from "./image/gir_dp3.jpg";
import reviewer4 from "./image/man_dp1.jpg";
import reviewer5 from "./image/man_dp2.jpg";
import reviewer6 from "./image/man_dp3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Review =()=>{
    return(
        <Fragment>
            <div className="review">
                <div className="title2"><h1>Customer's Review</h1></div>
                <div className="gridd">
                    <div className="opinion">
                        <div className="images">
                            <div className="imaage"><img src={reviewer1}/></div> 
                            <div className="stars">
                                <h1>Customer 1</h1>
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                </ul>
                            </div>
                        </div>
                            <div className="text2">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!

                                </p>
                            </div>
                        
                    
                    </div>
                    <div className="opinion">
                        <div className="images">
                            <div className="imaage"><img src={reviewer2}/></div> 
                            <div className="stars">
                                <h1>Customer 2</h1>
                                <ul >
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    
                                </ul>
                            </div>
                        </div>
                            <div className="text2">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!
                                
                                </p>
                            </div>
                        
                    
                    </div>
                    <div className="opinion">
                        <div className="images">
                            <div className="imaage"><img src={reviewer3}/></div> 
                            <div className="stars">
                                <h1>Customer 3</h1>
                                
                                    <ul>
                                        <li><FontAwesomeIcon icon={faStar}/></li>
                                        <li><FontAwesomeIcon icon={faStar}/></li>
                                        <li><FontAwesomeIcon icon={faStar}/></li>
                                        <li><FontAwesomeIcon icon={faStar}/></li>
                                        <li><FontAwesomeIcon icon={faStar}/></li>
                                    </ul>
                                   
                            </div>
                        </div>
                            <div className="text2">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!
                                
                                </p>
                            </div>
                        
                    
                    </div>
                    <div className="opinion">
                        <div className="images">
                            <div className="imaage"><img src={reviewer4}/></div> 
                            <div className="stars">
                                <h1>Customer 4</h1>
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                   
                                </ul> 
                            </div>
                        </div>
                            <div className="text2">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!
                                
                                </p>
                            </div>
                        
                    
                    </div>
                    <div className="opinion">
                        <div className="images">
                            <div className="imaage"><img src={reviewer5}/></div>   
                            <div className="stars">
                                <h1>Customer 5</h1>
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                            <div className="text2">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!
                                
                                </p>
                            </div>
                        
                    
                    </div>
                    <div className="opinion">
                        <div className="images">
                            <div className="imaage"><img src={reviewer6}/></div> 
                            <div className="stars">
                                <h1>Customer 6</h1>
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    
                                </ul>
                            </div>
                        </div>
                            <div className="text2">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!
                                
                                </p>
                            </div>
                        
                    
                    </div>


                </div>
                
            </div>
        </Fragment>
            
       
    )
}
export default Review;