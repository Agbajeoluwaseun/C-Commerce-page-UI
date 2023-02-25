import React from "react"
import "./App.css"

export default function Body(){
    return(
        <div>
        <h2>COMFORT THAT KEEPS COMFORTING</h2>
        <p3>what do you need? take an easy access to arrow, we've got them covered on-the-go!</p3>
        <div className="rowholder">
        
        <div className="row"  > 
            <div className="col-md-3">
            <img src="../pictures/clothes/men/KHAKI-850x842.png" width={170} /><p>CLOTHES</p> </div>
           
            <div className="col-md-3">
            <img src="../pictures/bags/ef8b92b082a7cd2e341236ee966439d9.jpg" width={170}/> <p>BAGS</p></div>
           
            <div className=" col-md-3"> 
            <img src="../pictures/shoes/adidas/477cd2d3ad674cae9427ae3701349eab_9366.webp" width={170}/><p>SHOES</p></div>
            
            <div className=" col-md-3">
            <img src="../pictures/gadget/pss55.webp" width={170} /><p>GADGETS</p></div>
            
            
            </div>
        </div>
    </div>
    )
}