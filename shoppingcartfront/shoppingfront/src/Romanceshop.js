import React, { useState } from "react";
import { HORRORS } from "./Horror";
import { Product } from "./pages/shopfront/product";
import Navigation from './components/commons/Navigation';
import CategoryBar from './components/commons/CategoryBar';
import "./book.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ROMANCE } from "./Romance";


export const Romanceshop = () => {
    const [search, setSearch] = useState('')
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Bookworms</h1>
      </div>
      <Form>
        <InputGroup className='my-3'>
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search'  />
        </InputGroup>
      </Form>
            <br></br>
      <div className="products">
        {ROMANCE.filter((item) => {
            return search.toLowerCase ==='' ? item : item.BName.toLowerCase().includes(search) || item.Author.toLowerCase().includes(search) ;
        }).map((product) => (
          <Product data={product} />
        ))}
        
      </div>
    </div>
  );
};