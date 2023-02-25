import React from "react"
import Menwears from "./Menwears"

export default function Menmarket(){
    return(
        <div className="maleholder" >
        <div className="males">
        <Menwears
        img="/pictures/clothes/men/1235c7281b627f29c0265889937a0ab4.jpg"
        name="Classic Man"
        price="$90.00"
        />

        <Menwears
        img="/pictures/clothes/men/OIP (2).jpg"
        name="Boss"
        price="$100.00"
        />
        
        <Menwears
        img="/pictures/clothes/men/R (3).jpg"
        name="JXT ED"
        price="$150.00"
        />

        <Menwears
        img="../pictures/clothes/men/R (4).jpg"
        name="The ADAM"
        price="$160.00"
        />

        <Menwears
        img="../pictures/clothes/men/OIP (1).jpg"
        name="Killer"
        price="$300.00"
        />

        </div>
        </div>
    )
}