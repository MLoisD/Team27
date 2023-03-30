import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
function CartI({ userId }) {
   const [cartItems, setCartItems] = useState([]);
 
   useEffect(() => {
       axios.get(`/api/chatcart/${userId}`)
           .then(response => {
               setCartItems(response.data);
           })
           .catch(error => {
               console.log(error);
           });
   }, [userId]);
 
   const removeFromCart = (cartItemId) => {
       axios.delete(`/api/chatcart/${cartItemId}`)
           .then(() => {
               setCartItems(cartItems.filter(item => item.id !== cartItemId));
           })
           .catch(error => {
               console.log(error);
           });
   };
 
   return (
       <div>
           <h1>Shopping Cart</h1>
           <table>
               <thead>
                   <tr>
                       <th>Product Name</th>
                       <th>Price</th>
                       <th>Quantity</th>
                       <th>Total</th>
                       <th></th>
                   </tr>
               </thead>
               <tbody>
                   {cartItems.map(item => (
                       <tr key={item.id}>
                           <td>{item.product.name}</td>
                           <td>{item.product.price}</td>
                           <td>{item.quantity}</td>
                           <td>{item.product.price * item.quantity}</td>
                           <td><button onClick={() => removeFromCart(item.id)}>Remove</button></td>
                       </tr>
                   ))}
               </tbody>
           </table>
           <Link to="/">Continue Shopping</Link>
       </div>
   );
}
 
export default CartI;