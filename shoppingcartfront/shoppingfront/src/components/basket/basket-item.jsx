import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const BasketItem = (props) => {
  const { BookID, BName, Author, price, imageUri } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (


     <div className="cartItem">
      <img src={imageUri} />
      <div className="description">
        <p>
          <b>{BName}</b>
        </p>
        <p>
          <b>{Author}</b>
        
        </p>
        <p> Price: £{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(BookID)}> - </button>
          <input
            value={cartItems[BookID]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), BookID)}
          />
          <button onClick={() => addToCart(BookID)}> + </button>
        </div>
      </div>
    </div> 
  );
};