import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Navigation from '../../components/commons/Navigation';
import CategoryBar from '../../components/commons/CategoryBar';
import "./Shopfront.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Shop = () => {
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
        {PRODUCTS.filter((item) => {
            return search.toLowerCase ==='' ? item : item.BName.toLowerCase().includes(search) || item.Author.toLowerCase().includes(search) ;
        }).map((product) => (
          <Product data={product} />
        ))}
        
      </div>
    </div>
  );
};