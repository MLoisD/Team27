import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./book.css";


export default function ViewBooks() {

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


    return(
        <div className="shopTitle">
        <h2>Books/ {book.bname}</h2>
      
<section className="container individprod my-5 pt-5">
    <div className="row mt-5">
        <div className="col-lg-5 col-md-12 col-12">
            <img className="img-fluid w-100 h-30 pb-1" src="../images/img2.jpg" id="MainImg"alt=""></img>
 
            <div className="small-img-group">
                <div className="small-img-col">
                    <img src="../images/img2.jpg" width="100%" class="small-img" alt=""></img>
                </div>
                <div className="small-img-col">
                    <img src="../images/img2.jpg" width="100%" class="small-img" alt=""></img>
                </div>
                <div className="small-img-col">
                    <img src="../images/img2.jpg" width="100%" class="small-img" alt=""></img>
                </div>
            </div>
        </div>
             
        <div className="col-lg-6 col-md-12 col-12">
           
            <h2>£{book.price}</h2>
            <label>Quantity:</label>
            <input type="number" value="1"></input>

            <br></br><br></br><h3 className="py-2"><p>Genre:</p>{book.genre}</h3>
            <br></br><h4 className="mt-3 mb-3">{book.description}</h4>
            <br></br> 
            <Link type="button" className="btn btn-default cart" to={`/basket/${book.id}`}>Add to cart </Link>
            <Link className="btn btn-primary my-1" to={"/home"}>
                Back to books
            </Link>
    </div>
</div>
    

</section>
            </div>
           
    );
}