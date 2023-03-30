import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './common.css'
const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/books">BookWorms</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/books">Store Page</Link>
                   
                        <Link to="/">About Us</Link>
                        <Link to="/">Contact Us</Link>
                        <Link to="/customers">Profile</Link>
                        <Link to="/basket"> Basket </Link>

                        {/* <Link to="/add-employee">Add Customer</Link>  */}
    
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation