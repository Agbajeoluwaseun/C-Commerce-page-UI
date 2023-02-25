import React from 'react'
import './App.css'
import Navbar from "./Navbar1"
import Header from "./Header"
import Body from "./Body"
import Womenmarket from './Womenmarket'
import Menmarket from './Menmarket'
import Shoemarket from './Shoemarket'
import Electronicsmarket from "./Electronicsmarket"
//import { nanoid } from 'nanoid'



export default function App() {

 /* React.useEffect (() => {
    const allHeld = mart.every(store => store.held)
  }) */
 
 

  /* function addToCart () {
    return{
      held: false,
      id:   nanoid()
    }
  } */

  /* const martBox = boxes.map (box => (
    <Womenwears value = {box.value}
    key = {box.id}

  ) ) */

  return (
   <div classname="App">
   
   <Navbar/>
   <Header/>
   <Body/>
   <h4>WOMENS</h4>
   <Womenmarket/>
   <h4>MENS</h4>
   <Menmarket/>
   <h4>FOOTWEARS</h4>
   <Shoemarket/><h4>GADGETS</h4>
   <Electronicsmarket/>
   </div>
  )
}