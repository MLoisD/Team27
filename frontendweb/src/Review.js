import React, { useState, useEffect ,useContext } from "react";
import { ShopContext } from "./context/shop-context";

import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./basket.css";
import Books from "./components/books/Books";

export const Review = () => {
  

  
const [book,setBooks] = useState({
    bname:"",
    author:"",
    genre:"",
    description:"",
    price:"",
    stock:""

});

const { id, value }= useParams();

useEffect(() => {
    loadBooks();

}, []);

const loadBooks= async () => {
    const result = await axios.get(`/api/v1/books/${id}`);
    setBooks(result.data);
};
const navigate = useNavigate();


return (
    
    <div className="leftcolumn">
        <button className="back" onClick={() => navigate("/")}> Continue Shopping </button>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="container">
      <Link className="btn" id="next" to={`/basket/${book.id}/${value}/Payment`}>back </Link>
            <div className="progress-container">
            <div className="progress" id="progress"></div>
            <div className="circle active">Cart</div>
            <div className="circle">Payment</div>
            <div className="circle">Review</div>
   </div>
</div>

    <div className="review">
    <h2>Thank you for your order!! </h2>
    <h3>Keep an eye out on your inbox for the order confirmation</h3>
    <button className="btn">Track Order</button>

<div className="confirmation">
<th>
   <br></br> <p>Order review</p><br></br>
   </th>
   <tr>
   <p>Book: {book.id}</p></tr>
   <tr>
   <p>Book Name: {book.bname}</p></tr>
   <tr>
   <p>Quantity: {value}</p></tr>
   <tr>
    <p> Subtotal: ${book.price*value} </p>
    
   </tr>
   </div>
    </div>
</div>

);

}