import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import { get } from '../services/BookService' 
import './bookStyle.css';
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
const imageBaseURL = "../image/img";
const imageextens = ".jpg";




const Books = () => {


    const [books, setBooks] = useState([])


    const getBooks = () => {
        get("/books")
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {

        getBooks() 

    }, [])


    console.log(books)



  
    return (
        <> 
           <div className="shop">
           <div className="shopTitle">
            <h1>Bookworms</h1>
             </div>
          <div className="products">
                {books?.map(book => {
                        return (
                           // <>
                                <div className="product">
                                <div key={book.BookID}>

                                    {/* <img src="{book.imageUri}" alt="no pic"/> */}
                                    {/* <img src="../image/img1.jpg" alt="no pic"/> */}
                                    <img  key={book.BookID} alt="TitleOfImage" src= "{`{imageBaseURL}${book.BookID}`}"/>
                                <div className="description">
                                <p>
                                <b>{book.bname}</b>
                                </p>
                                <p>
                                <b>{book.author}</b>
                                </p>
                                <p> £{book.price}</p>
                                </div>
                                <Link to={`/books/${book.BookID}`} key={book.BookID}>More info </Link>

                                               
                                {book.stock > 10 ? ( 
                                    <small>{book.stock + " Available"}</small> 
                                    ): ( <small className="has-text-danger">Low in stock</small>) }
    
                                    {/* <div className="title"> <img height="250px" src={book.cover} alt="no pic"></img></div> */}
                                                 {/* <img src={book.imageUri}/>  */}
                                            </div>

                                            </div>
                                            
                               // </>
                                
                               
                                )})
    
                                
                  
                    } </div>
                     </div>
                    
    
                
             
        

      {/*       <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Book List</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Book Name</th>
                                            <th>Book author</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            books?.map(book => {
                                                return (
                                                    <tr key={book.BookID}>
                                                        <td>{book.bname}</td>
                                                        <td>{book.author}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}



        </>
    )
}

export default Books;



/* 



const Books = () => {

const [book, setBooks] = useState([]) // created the employee state


   // created the method which will get the list of employees
    const getBooks = () => { 
        get("/books")
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {

        getBooks()

    }, [])
    console.log(book)

    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Book List</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Book Name</th>
                                            <th>Book author</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            book?.map(books => {
                                                return (
                                                    <tr key={books.BookID}>
                                                        <td>{books.bname}</td>
                                                        <td>{books.author}</td>
                                                        <td>{books.description}</td>
                                                        <td>{books.price}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default Books; */