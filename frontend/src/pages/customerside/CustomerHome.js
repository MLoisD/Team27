import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CustomerHome() {

  const [book, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);


  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8080/bookList")
    setBooks(result.data)
  }
  return (
    <div>
      <h1>Home</h1>
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
                  <td>{book.datepub}</td>
                  <td>{book.genre}</td>
                  <td>{book.ageRate}</td>
                  <td>{book.cover}</td>
                  <td>{book.description}</td>
                  <td>{book.price}</td>
                  <td>{book.stockNum}</td>
                </tr>
              ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};
