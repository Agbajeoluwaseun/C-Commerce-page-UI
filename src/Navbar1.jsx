import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {Nav, Navbar, NavbarBrand, NavDropdown} from "react-bootstrap"
import Logo from "../images/R (1).png"


export default function Navbar1(){

    return(
    <div className='mynavbar' >
    <Navbar bg="dark" variant="dark" sticky='top' expand="lg" collapseOnSelect >
    <Navbar.Brand>

    <div className='logo'>
    <a href="#about-us">
    <img src={Logo} height={20}  />
    arrow
    </a>
    </div>

    </Navbar.Brand> 
    <Navbar.Toggle className='colouring' />
    <Navbar.Collapse>

    <Nav className='navnav'>
    <NavDropdown title="Products" >
    <NavDropdown.Item href='#products/Mens'> Mens </NavDropdown.Item>
    <NavDropdown.Item href='#products/Womens'> Womens</NavDropdown.Item>
    <NavDropdown.Item href='#products/Footwears'> Footwears</NavDropdown.Item>
    <NavDropdown.Item href='#products/Gadgets'>Gadgets</NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item href='#products/promotions'> Promotions</NavDropdown.Item>
    </NavDropdown> 
    <Nav.Link href='#about-us' >About Us</Nav.Link>
    <Nav.Link href='#contact-us' >Contact Us</Nav.Link>
    <Nav.Link href='#reviews' >Reviews</Nav.Link>
    </Nav>

    </Navbar.Collapse>

     </Navbar>
    </div>
       )

      }