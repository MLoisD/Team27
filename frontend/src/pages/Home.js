import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

    const [customer, setCustomers] = useState([])

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        const result = await axios.get("http://localhost:8080/customerList")
        setCustomers(result.data)
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
                                    <th scope="row" key={index}>{index +1}</th>
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
        </div>
    )
}
