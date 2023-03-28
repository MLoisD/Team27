import React from 'react'
import "./navstyle.scss";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='nav'>
                <div className='container-fluid'>
                    <Link className="logo" to="/">Home</Link>
                    <Link className='btn btn-outline-light' to="/products">All Products</Link>
                    <Link className='btn btn-outline-light' to="/basket">Basket</Link>
                    <Link className='btn btn-outline-light' to="/aboutus">About Us</Link>
                    <Link className='btn btn-outline-light' to="/contactus">Contact Us</Link>
                    <Link className='btn btn-outline-light' to="/login">Login</Link>
                    <Link className='btn btn-outline-light' to="/signup">Sign Up</Link>
                    <Link className='btn btn-outline-light' to="/user">User Profile</Link>
                    <Link className='btn btn-outline-light' to="/admin">Admin</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar