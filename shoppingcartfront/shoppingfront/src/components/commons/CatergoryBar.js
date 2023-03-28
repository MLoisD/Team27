import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './common.css'


const CategoryBar = () => {

    return (
        <div className="Catbar" >
                    <Nav className="tabs">
                        <Link to="/Home">Home</Link>
                        <Link to="/Fiction">Fiction</Link>
                        <Link to="/Romance"> Romance </Link>
                        <Link to="/Teen">Teens</Link>
                        <Link to="/Popular">Popular</Link>
                        <Link to="/horror">Horror</Link>
    
    
                    </Nav> 
          </div>
       
    )

    
}

export default CategoryBar 