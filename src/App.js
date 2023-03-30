import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Navigation from './components/commons/Navigation';
import Books from './components/books/Books';
import Home from './components/books/Home';
import AddCustomers from './components/customers/AddCustomer';
import Customers from './components/customers/Customers';
import HeaderComponent from './components/HeaderComponent';
import { Shop } from "./pages/shopfront/shop";
import MyImagesComponent from './components/MyImagesComponent';
import UploadImageComponent from './components/UploadImageComponent';
import { Basket } from "./components/basket/basket";
import { ShopContextProvider } from "./context/shop-context";
 import CategoryBar from './components/commons/CategoryBar';
import ViewBooks from "./components/books/ViewBooks";
import FileService from './services/FileService';

import { Horrorshop } from './Horrorshop';
import { Fictionshop } from './Fictionshop';
import { Romanceshop } from './Romanceshop';
import { Cart } from './Cart';
import CartI from './CartI';
import Payment from './Payment';
import { ProductDetail } from './pages/shopfront/ProductDetail';
import { Review } from './Review';



function App() {
  return (
    
      <ShopContextProvider>
      <Navigation />
       <CategoryBar /> 
      <div className='container'>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="Shop/:id" element= {<ProductDetail />} />
        <Route path="/customers" element={<Customers />} />
        <Route path='/my-images' element={<MyImagesComponent />}></Route>
        <Route path='/upload' element={<UploadImageComponent />}></Route>
        <Route path="/basket" element={<Cart />} />
        <Route exact path="/viewbook/:id" element={<ViewBooks />} />
        <Route path="/horror" element={<Horrorshop />} />
        <Route path="/romance" element={<Romanceshop />} />
        <Route path="/fiction" element={<Fictionshop />} />
        <Route path="/basket/:id" element = {<Cart />} />
        <Route path="/basket/:id/:value/Payment" element = {<Payment />} />
        <Route path="/addToCart/:id" element = {<Home />} />
        <Route path="/basket/:id/:value/review" element ={<Review />} />
      <Route path="chatcart/:userId" element ={<CartI />} />
     
      </Routes>
      </div>
      </ShopContextProvider>
    

  );
}

export default App;


/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

