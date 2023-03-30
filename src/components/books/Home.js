import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "./book.css";
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';

export default function Home(props) { 
  const { onAdd } = props;

  const [books, setBooks] = useState([]);
 


  const { id } = useParams();

  useEffect(() => {
    loadBooks();


  }, []);

  
  const loadBooks = async () => {
      const result = await axios.get("http://localhost:5000/api/v1/books")
      setBooks(result.data);
    };




  return(
   
    <section className="product_list">
      <h2>BookWorms</h2>

    <div className="product_container" id="product_container">

  
      {books.map((book,index) =>(  
        
   <div className="card " key ={index}> 
       {/* {index + 1} */}
    <div className="image"><img src="images/img2.jpg"></img>
    <div className="title"><b>{book.bname}</b>
    <div className="author_name"><b>{book.author}</b>
    <div className="price"><b>£{book.price}</b>
    </div>
    <Link className="btn btn-primary my-1" to={`/viewbook/${book.id}`}>View details </Link>
    {/* <Link className="btn btn-default cart" to={`/addToCart/${book.id}`}>Add to cart </Link>  */}
     <Link className="btn btn-default cart" to={`/basket/${book.id}`}>Add to cart </Link> 
   
     </div>
</div>

    </div>

</div>

                                                      
                 ))}
                
                     </div>
                    
                     </section>

                          )
                         
           
             }