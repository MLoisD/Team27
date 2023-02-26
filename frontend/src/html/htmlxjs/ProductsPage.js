import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function InventoryHome() {

    const [book, setBooks] = useState([]);

    //const {bookID}= useParams()

    useEffect(() => {
        loadCustomers();
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/bookList")
        setBooks(result.data)
    }

    return (
        <div className='container'>
            <div className='py'>
                    <tbody>
                        {
                            book.map((book, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{book.bname}</td>
                                    <td>{book.author}</td>
                                    <td>{book.datepub}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.ageRate}</td>
                                    <td>{book.cover}</td>
                                    <td>{book.description}</td>
                                    <td>{book.price}</td>
                                    <td>{book.stockNum}</td>
                                    <td>
                                        <Link className="btn btn-outline-danger mx-2"
                                        to={`/editBook/${book.bookID}`}
                                        >Edit Book</Link>
                                        <Link className="btn btn-danger mx-2"
                                        onClick={() => deleteBooks(book.bookID)}
                                        >Delete Book</Link>
                                    </td>
                                </tr>
                            ))}

                    </tbody>
            </div>
        </div>
    )
}
