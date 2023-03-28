import React, {useEffect, useState} from 'react';
import "./booksingle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {useNavigate, useParams} from "react-router-dom";
import {bookRows} from "../../datatablesource";
import Button from "@mui/material/Button";

export const BookSingle = (props) => {
    const params = useParams();

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`edit/${params.bookId}`, {replace: true})
    }

    const id = params.bookId

    const [data, setData] = useState(bookRows)
    const [bookMap, setBookMap] = useState([])

    const handleBookMap = () => {
        const book = data.filter(item => item.id === parseInt(id));
        setBookMap(book);
    }

    useEffect((handleBookMap), []);


    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">EDIT</div>
                        <h1 className="title">BOOK INFORMATION</h1>
                        { bookMap.map((item, key)  =>
                        <div className="item" key={item.id}>
                            <img
                                src={item.img}
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{item.bookname}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Author:</span>
                                    <span className="itemValue">{item.author}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">ID:</span>
                                    <span className="itemValue">{item.id}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Category:</span>
                                    <div id="description">{item.genre}</div>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Stock:</span>
                                    <span className="itemValue">{item.stock}</span>
                                </div>
                            </div>
                        </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};






