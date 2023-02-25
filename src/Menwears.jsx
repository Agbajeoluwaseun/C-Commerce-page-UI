import React from "react"

export default function props(props){
    return(
        <nav>
        
        <div  className="Menproductcard">
        <img src={props.img} width={170} />
        <span><h3>{props.name}</h3>
        <p4>{props.price}</p4>
        </span>
        </div>
        </nav>
    )
}