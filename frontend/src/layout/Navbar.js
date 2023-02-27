import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
<div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Book CRUD</a>
                    <Link className='btn btn-outline-light' to="/mainsite">Main Site</Link>

                    <Link className='btn btn-outline-light' to="/addBook">Add Book</Link>
                </div>
            </nav>
        </div>
    )
}
