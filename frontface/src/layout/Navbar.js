import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="nav">
                <div className="container-fluid">
                    <Link className="logo" to="/">Book CRUD</Link>
                    <Link className='btn btn-outline-light' to="/mainsite">Main Site</Link>
                    <Link className='btn btn-outline-light' to="/storefront">All Products</Link>
                    <Link className='btn btn-outline-light' to="/basket">Basket</Link>
                    <Link className='btn btn-outline-light' to="/about">About Us</Link>
                    <Link className='btn btn-outline-light' to="/contactus">Contact Us</Link>
                    <Link className='btn btn-outline-light' to="/addBook">Add Book</Link>
                </div>
            </nav>
        </div>
    )
}
