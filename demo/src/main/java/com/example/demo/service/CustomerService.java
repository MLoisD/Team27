package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.entity.Customer;
import com.example.repository.CustomerRepository;


public interface CustomerService {
    Customer save(Customer customer);
    

    List<Customer> getCustomers();


}
