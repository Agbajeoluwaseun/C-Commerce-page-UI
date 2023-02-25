import React from "react"
import Marketplace from "./Womenwears"

export default function Market(){
    return (
        <div className="femaleholder" >
        <div className="females">
        <Marketplace
        img="../pictures/clothes/women/986d3d020a5c36357ce38acf910c1851.jpg"
        name="Elegante"
        price="$20.00"
        />

        <Marketplace
        img="../pictures/clothes/women/9b8de46c9eea60e85005afa40ae46865.jpg"
        name="Boss Chick"
        price="$50.00"
        />
        
        <Marketplace
        img="../pictures/clothes/women/OIP.jpg"
        name="Little Miss"
        price="$30.00"
        />

        <Marketplace
        img="../pictures/clothes/women/R (1).jpg"
        name="La Hautress"
        price="$100.00"
        />

        <Marketplace
        img="../pictures/clothes/women/R.jpg"
        name="Mounie"
        price="$40.00"
        />

        </div>
        </div>
    )
}