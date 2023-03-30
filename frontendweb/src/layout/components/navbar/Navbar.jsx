import React, { useEffect } from 'react'
import "./navstyle.scss";
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai';
import { LoggedAtom, LoggedAtomCookie } from '../../../App';
import Cookies from 'js-cookie';



function Navbar() {


    const [logged, setLogged] = useAtom(LoggedAtom);
  

    return (
        <div>
            <nav className='nav'>
                <div className='container-fluid'>
                    <Link className="logo" to="/">Home</Link>
                    <Link className='btn btn-outline-light' to="/products">All Products</Link>
                    <Link className='btn btn-outline-light' to="/aboutus">About Us</Link>
                    <Link className='btn btn-outline-light' to="/contactus">Contact Us</Link>
                    <Link className='btn btn-outline-light' to="/admin">Admin</Link>
                    {
                        logged ?
                        <>
                        <Link className='btn btn-outline-light' to="/user">User Profile</Link>
                        <Link className='btn btn-outline-light' to="/basket">Basket</Link>
                        <Link className='btn btn-outline-light' to="/logout">Log Out</Link>
                        </>
                        :
                        <>
                        <Link className='btn btn-outline-light' to="/login">Login</Link>
                        <Link className='btn btn-outline-light' to="/signup">Sign Up</Link>
                        </>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar