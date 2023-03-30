import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import { get } from '../services/CustomerService'




const Customers = () => {


    const [customers, setCustomers] = useState([])


    const getCustomers = () => {
        get("/customers")
            .then(res => {
                console.log(res.data)
                setCustomers(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {

        getCustomers() 

    }, [])




    console.log(customers)

    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Customer List</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Customer Name</th>
                                            <th>Email</th>
                                            <th>image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            customers?.map(customer => {
                                                return (
                                                    <tr key={customer.customerID}>
                                                        <td>{customer.username}</td>
                                                        <td>{customer.useremail}</td>
                                                        <td>{customer.image}</td>
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

export default Customers;