import React from "react"

export default function props(props){
    return(
        <div  className="Electrons">
        <img src={props.img} width={170} />
        <span className="span">
        <h3>{props.name}</h3>
        <p4>{props.price}</p4>
        </span>
        </div>
    )
}