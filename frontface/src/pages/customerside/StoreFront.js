import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./styling.css"

export default function StoreFront() {

    const [book, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);


    const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/book/bookList")
        setBooks(result.data)
    }

    return (
        <div>
            <h1>Store Front</h1>
            <div class="product_container">
                <div class="card">
                    {
                        book.map((book, index) => (
                            <div class="card">
                                <div class="image"><img src="images\sample book 1.jpg"></img></div>
                                <div class="title"><td>{book.bname}</td></div>
                                <div class="price">
                                    <h4>£{book.price}</h4>
                                </div>
                                <div class="author_name">
                                    <p><td>{book.author}</td></p>
                                </div>
                                <div><a href="men_details.html"><button class="addTocart"><i class="fa fa-shopping-cart"></i> Add to
                                    cart</button></a></div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};