import React from "react"
import Shoes from "./Shoes"

export default function Shoemarket(){
    return(
        <div className="shoeholder" >
        <div className="shoes">
        <Shoes
        img="../pictures/shoes/adidas/477cd2d3ad674cae9427ae3701349eab_9366.webp"
        name="Adidas Black"
        price="$40.00"
        />

        <Shoes
        img="../pictures/shoes/air jordans/wp5858201.webp"
        name="Nike Air"
        price="$50.00"
        />
        
        <Shoes
        img="../pictures/shoes/jordans/R.jpg"
        name="Fly Jordans"
        price="$60.00"
        />

        <Shoes
        img="../pictures/shoes/adidas/bec5e53e1d76484c93a4ae37016707b3_9366.webp"
        name="Adidas OFF"
        price="$100.00"
        />

        <Shoes
        img="../pictures/shoes/adidas/Ultraboost_5.0_DNA_Shoes_Beige_FZ1851_01_standard.jpg"
        name="Ultraboost"
        price="$40.00"
        />

        </div>
        </div>
    )
}