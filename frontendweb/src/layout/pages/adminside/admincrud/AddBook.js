import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './adminmainstyle.scss'

export default function AddBook() {

    let navigate = useNavigate();

    const [book, setBook] = useState({
        yearPub: "",
        stockNum: "",
        description: "",
        ageRate: "",
        cover: "",
        bname: "",
        author: "",
        genre: "",
        price: ""
    });

    const { yearPub, stockNum,description, ageRate, cover, bname, author, genre, price } = book;

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://212.71.248.171:8080/book/addBook", book)
        navigate("/admin")
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 offset-md-3 border rounded p-4'>
                    <h2 className='text-center m-4'>Add Book</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Title' className='form-label'>
                                Title
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter book title'
                                name='bname'
                                value={bname}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Author' className='form-label'>
                                Author
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter book author'
                                name='author'
                                value={author}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Genre' className='form-label'>
                                Genre
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter book genre'
                                name='genre'
                                value={genre}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='YearPub' className='form-label'>
                                Publishing year
                            </label>
                            <input
                                type={"number"}
                                min='0'
                                className="form-control"
                                placeholder='Enter year published'
                                name='yearPub'
                                value={yearPub}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Agerate' className='form-label'>
                                Age Rating
                            </label>
                            <input
                                type={"number"}
                                min='0'
                                className="form-control"
                                placeholder='Enter book age rating'
                                name='ageRate'
                                value={ageRate}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='CoverType' className='form-label'>
                                Cover Type
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter cover type (with first letter capital)'
                                name='cover'
                                value={cover}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Description' className='form-label'>
                                Description
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter book description'
                                name='description'
                                value={description}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Stock' className='form-label'>
                                Stock Size
                            </label>
                            <input
                                type={"number"}
                                min='0'
                                className="form-control"
                                placeholder='Enter stock num'
                                name='stockNum'
                                value={stockNum}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='price' className='form-label'>
                                Book Price
                            </label>
                            <input
                                type={"number"}
                                step='0.1'
                                min='0'
                                className="form-control"
                                placeholder='Enter book price'
                                name='price'
                                value={price}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
