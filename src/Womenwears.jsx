import React /*, { useState } */ from "react";
//import Theme from "./Theme";

export default function Womenwears(props){

    //const Theme = this.context
   // const [cart, setCart] = useState("add to cart")

   // function addToCart () {
    //    setCart("added")
    //}

    return(
        
        
       <div  className="productcard">
       <img src={props.img} width={170} />
       <span>
       <h3>{props.name}</h3>
       <p4>{props.price}</p4>
       <div>
       <button  ></button>
       </div>
       </span>
       
       </div>
    )
}