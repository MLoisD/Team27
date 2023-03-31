import React, { useState, useEffect ,useContext } from "react";
import { ShopContext } from "./context/shop-context";

import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./basket.css";
import Books from "./components/books/Books";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();


  
const [book,setBooks] = useState({
    bname:"",
    author:"",
    genre:"",
    description:"",
    price:"",
    stock:""

});

const { id }= useParams();

useEffect(() => {
    loadBooks();

}, []);

const loadBooks= async () => {
    const result = await axios.get(`http://localhost:5000/api/v1/books/${id}`);
    setBooks(result.data);
};

const bookSet = true;

const getInitialState = () => {
    const value = "1";
    return value;
  };
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };




  const navigate = useNavigate();

  return (
    
    <div className="leftcolumn">
        <button className="back" onClick={() => navigate("/")}> Continue Shopping </button>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="container">
      <Link className="btn" id="next" to={`/basket/${book.id}/${value}/Payment`}>next </Link>
            <div className="progress-container">
            <div className="progress" id="progress"></div>
            <div className="circle active">Cart</div>
            <div className="circle">Payment</div>
            <div className="circle">Review</div>
   </div>
</div>

<div className="row">
  <div className="leftcolumn">
    <div className="cartItem">
    {/* <img src="/images/img6.jpg" /> */}
    <div className="description">
        <p>
          <b>{book.bname}</b>
        </p>
        <p>
          <b>{book.author}</b>
        </p>
        </div>
        <div className="subtotalprice"></div>
        <p> Price: £{book.price}</p>

      <div className="column quantity">
        <label htmlFor="quantity">Quantity:</label>
          <select value={value} onChange={handleChange} name="quantity" id="quantity">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          </select>
      </div>
  </div>
  </div>
  

          


        <div className="leftcolumn">
         <Link type="button" className="checkout-button" to={`/basket/${book.id}/${value}/Payment`}> Checkout</Link>

   </div>
         
      </div>
     


      {id > 0 ? (                
   
                <div className="rightcolumn">
                  <h2> Subtotal: ${book.price*value} </h2>
                
                <div className="card">
                <h3>Shipping</h3>
                <button type="button" class="collapsible">Shipping fee</button>
                <div class="content">
                <p>1st class: £4.99.</p>
                <p>Standard shipping: £2.99</p>
                <p>International: £5.99</p>
                </div>
                </div>
                </div>
        
              ) : (
                
               <p><h1> Your Shopping Cart is Empty</h1></p>
              )}
                





{/* 
      {totalAmount > 0 ? (
                
   
        <div className="rightcolumn">
          <h2> Subtotal: ${totalAmount} </h2>
        
        <div className="card">
        <h3>Shipping</h3>
        <button type="button" class="collapsible">Shipping fee</button>
        <div class="content">
        <p>1st class: £4.99.</p>
        <p>Standard shipping: £2.99</p>
        <p>International: £5.99</p>
        </div>
        </div>
        </div>

      ) : (
        
       <p><h1> Your Shopping Cart is Empty</h1></p>
      )}
         */}


    <div className="previousorders">
     <div className="row">
      <div className="leftcolumn">
        <div className="w3-container">
         <h3><u>Previous orders</u></h3>
       
       
         <table className="w3-table-all w3-card-4">
           <tr>
             <th>Book</th>
             <th>Title</th>
             <th>Author</th>
             <th>Quantity</th>
             <th>Total Price</th>
           </tr>
           <tr>
             <td><img src="/images/img1.jpg" alt="Metamorphis" width="100" height="110"></img></td>
             <td>Kafka On The Shore</td>
             <td>Murakami</td>
             <td>1</td>
             <td>£12.99</td>
           </tr>
         </table><br></br>
       </div>
     </div>
    </div>
    </div>
    </div>
    
    

   
  );
  
 
}
