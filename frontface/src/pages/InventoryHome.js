import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function InventoryHome() {

    const [customer, setCustomers] = useState([])
    const [book, setBooks] = useState([]);

    //const {bookID}= useParams()

    useEffect(() => {
        loadCustomers();
        loadBooks();
    }, []);

    const loadCustomers = async () => {
        const result = await axios.get("http://localhost:8080/customerList")
        setCustomers(result.data)
    }

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/book/bookList")
        setBooks(result.data)
    }

    const deleteBooks = async (bookID) => {
        await axios.delete(`http://localhost:8080/book/bookList/${bookID}`)
        loadBooks()
    }

    return (
        <div className='container'>
            <div className='py'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">username</th>
                            <th scope="col">email</th>
                            <th scope="col">type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customer.map((customer, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{customer.uname}</td>
                                    <td>{customer.uemail}</td>
                                    <td>{customer.userType}</td>
                                    <td>
                                        <button className="btn btn-outline-danger mx-2">View Order</button>
                                        <button className="btn btn-primary mx-2">Edit User</button>
                                        <button className="btn btn-danger mx-2">Delete User</button>
                                    </td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>
            <div className='py'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">index</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Date</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Age Rating</th>
                            <th scope="col">Cover Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            book.map((book, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{book.bname}</td>
                                    <td>{book.author}</td>
                                    <td>{book.yearPub}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.ageRate}</td>
                                    <td>{book.cover}</td>
                                    <td>{book.description}</td>
                                    <td>{book.price}</td>
                                    <td>{book.stockNum}</td>
                                    <td>
                                        <Link className="btn btn-outline-danger mx-2"
                                        to={`/updateBook/${book.bookID}`}
                                        >Edit Book</Link>
                                        <Link className="btn btn-danger mx-2"
                                        onClick={() => `/deleteBook/${book.bookID}`}
                                        >Delete Book</Link>
                                    </td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
