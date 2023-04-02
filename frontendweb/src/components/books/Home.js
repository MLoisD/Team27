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
      const result = await axios.get("/api/v1/books")
      setBooks(result.data);
    };




  return(
   
    <section className="product_list">
      <h2>BookWorms</h2>
      <div>
            <div className="nav2">
                <div className='container-fluid'>
                    <Link className="logo" to="/home">All books</Link>
                    <Link className='btn btn-outline-light' to="/Horror">Horror</Link>
                    <Link className='btn btn-outline-light' to="/fiction">Fiction</Link>
                    <Link className='btn btn-outline-light' to="/romance">Romance</Link>
                    <Link className='btn btn-outline-light' to="/teens">Teens</Link>
                    <Link className='btn btn-outline-light' to="/popular">Popular</Link>
                    
                </div>
            </div>
        </div>
    <div className="product_container" id="product_container">

  
      {books.map((book,index) =>(  
        
   <div className="card " key ={index}> 
       {/* {index + 1} */}
    <div className="image"><img src="images/img2.jpg"></img>
    <div className="title"><b>{book.bname}</b>
    <div className="author_name"><b>{book.author}</b>
    <div className="price"><b>£{book.price}</b>
    <br></br>
    {book.stock > 10 ? ( 
    <small>{book.stock + " Available"}</small> 
    ): ( <small className="has-text-danger">Low in stock</small>) }
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