import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductsPage() {

    const [book, setBooks] = useState([]);

    //const {bookID}= useParams()

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/bookList")
        setBooks(result.data)
    }

    return (
        <section class="product_list">

            <div class="product_container">
                   { book.map((book, index) =>(
                        <div class="card">
                            <div class="image"><img src="images\sample book 1.jpg"></img></div>
                            <div class="title"><td>{book.bname}</td></div>
                            <div class="price">
                                <h4>£9.99</h4>
                            </div>
                            <div class="author_name">
                                <p><td>{book.author}</td></p>
                            </div>
                            <div><a href="individual.html"><button class="addTocart"><i class="fa fa-shopping-cart"></i> Add to
                                cart</button></a></div>
                        </div>
                    ))}
        </div>
        </section>
    )
}
