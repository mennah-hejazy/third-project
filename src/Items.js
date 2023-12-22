import React, {Fragment , useContext} from "react";
import CartContext from "./store/CartContext";
const Items = ()=>{
    const cart= useContext(CartContext);
    return(
        <Fragment>
            <h2>{cart.items}</h2>
            <h2>{cart.price}</h2>
        </Fragment>
    );

}
export default Items; 
