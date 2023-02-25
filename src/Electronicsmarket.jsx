import React from "react"
import Electronics from "./Electronics"

export default function Menmarket(){
    return(
        <div className="electronicholder" >
        <div className="electronics">
        <Electronics
        img="/pictures/gadget/212000331.jpg"
        name="Red X Box Controller"
        price="$130.00"
        />

        <Electronics
        img="/pictures/gadget/c2a893e2002028a98b3c7e8e11689c11.jpg"
        name="Fancy Lamp"
        price="$84.40"
        />
        
        <Electronics
        img="/pictures/gadget/OIP (1).jpg"
        name="sony Playstation 5"
        price="$800.09"
        />

        <Electronics
        img="/pictures/gadget/OIP.jpg"
        name="Electronic Lamp"
        price="$100.00"
        />

        <Electronics
        img="/pictures/gadget/pad-s5.jpg"
        name="sony Playstation 5 controller"
        price="$250.00"
        />

        </div>
        </div>
    )
}