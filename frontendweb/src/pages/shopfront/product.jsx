import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { BookID, BName, Author, price, imageUri} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[BookID];

  return (
    <div className="product">
      <img src={imageUri}  />
      <div className="description">
        <p>
          <b>{BName}</b>
        </p>
        <p>
          <b>{Author}</b>
        </p>
        <p> £{price}</p>
      </div>
      
       <button className="addToCartBttn" onClick={() => addToCart(BookID)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    
     
       
    </div>
  );
};