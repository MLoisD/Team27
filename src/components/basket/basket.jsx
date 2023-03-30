import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { BasketItem } from "./basket-item";
import { useNavigate } from "react-router-dom";

import "./basket.css";
export const Basket = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();


  const navigate = useNavigate();

  return (
    
    <div className="leftcolumn">
        <button className="back" onClick={() => navigate("/")}> Continue Shopping </button>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="container">
        <a href="Payment.html" class="btn" id="next"> next</a>
            <div class="progress-container">
            <div class="progress" id="progress"></div>
            <div class="circle active">Cart</div>
            <div class="circle">Payment</div>
            <div class="circle">Review</div>
   </div>
</div>

<div className="row">

        {PRODUCTS.map((product) => {
          if (cartItems[product.BookID] !== 0) {
          
          return <BasketItem data={product} />;
          
          
            
          }
         
          
        })}

        <div className="leftcolumn">
         <button className="checkout-button"
          onClick={() => {
       checkout();
       navigate("/checkout");
     }}
   >
     {" "}
     Checkout{" "}
   </button>
   </div>
         
      </div>
     










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
        
    </div>
   
  );
  
 
}
