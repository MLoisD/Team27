import React, { useState } from "react";
import { FICTION } from "./Fiction";
import { Product } from "./pages/shopfront/product";
import Navigation from './components/commons/Navigation';
import CategoryBar from './components/commons/CategoryBar';
import "./book.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export const Fictionshop = () => {
    const [search, setSearch] = useState('')
  return (
    <div className="shop">
      <h1>Fiction</h1>
      <div className="shopTitle">
   
        <div>
            <div className="nav2">
                <div className='container-fluid'>
                    <Link className="logo" to="/home">All books</Link>
                    <Link className='btn btn-outline-light' to="/Horror">Horror</Link>
                    <Link className='btn btn-outline-light' to="/fiction">Fiction</Link>
                    <Link className='btn btn-outline-light' to="/romance">Romance</Link>
                    <Link className='btn btn-outline-light' to="/teens">Teens</Link>
                    <Link className='btn btn-outline-light' to="/popular">Popular</Link>
                    
                </div>
            </div>
        </div>
      </div>
      <Form>
        <InputGroup className='my-3'>
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search'  />
        </InputGroup>
      </Form>
            <br></br>
      <div className="products">
        {FICTION.filter((item) => {
            return search.toLowerCase ==='' ? item : item.BName.toLowerCase().includes(search) || item.Author.toLowerCase().includes(search) ;
        }).map((product) => (
          <Product data={product} />
        ))}
        
      </div>
    </div>
  );
};