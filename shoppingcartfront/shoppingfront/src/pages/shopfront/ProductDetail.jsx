
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { useParams } from "react-router-dom";

export const ProductDetail = (props) => {  

   
    const {bookID} = useParams();
        const product = PRODUCTS.find((product) => product.BookID === 
    bookID);
    const {BName, Author, price, imageUri,genre} = props.data;
  
    
      return (
        
    
              
            
        <div className="product">
            <h2> Your product</h2>
          <img src={imageUri}  />
          <div className="description">
        
            <p> £{price}</p>
       
          </div>
    
        
         
           
        </div>
      );
    };