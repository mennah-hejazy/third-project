import React, {useState} from "react";
import'./About.css';
import shoe0 from "./image/shoes1.png";
import shoe1 from "./image/red_shoes1.png";
import shoe2 from "./image/red_shoes2.png";
import shoe3 from "./image/red_shoes3.png";
import shoe4 from "./image/red_shoes4.png";


const About =()=>{
    const [ mainShoe, setShoe ] = useState({shoe0});
    const changeShoe = (shoe) =>{
        setShoe(shoe);
    };
 
    return(
        <>
        <div className="container3">
            <h1>web about</h1>
            <div className="strips">
                <ul>
                <li><img onClick = {()=> changeShoe({shoe1})} src = {shoe1}/></li>
                <li><img onClick = {()=> changeShoe({shoe2})} src = {shoe2}/></li>
                <li><img onClick = {()=> changeShoe({shoe3})} src = {shoe3}/></li>
                <li><img onClick = {()=> changeShoe({shoe4})} src = {shoe4}/></li>
                </ul>
            
                <div className="main">
                    <img src={mainShoe}/>
                </div>
                <div className="paragraph">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

</p>
                </div>
       </div>    
            <a href="#">Shop Now</a>
        </div>
        </>
    )
}
export default About;