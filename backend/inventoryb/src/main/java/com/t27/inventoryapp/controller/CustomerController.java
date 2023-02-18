package com.t27.inventoryapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.t27.inventoryapp.repository.*;
import com.t27.inventoryapp.model.Customer;
import java.util.*;

@RestController
public class CustomerController{

    @Autowired
    private CustomerRepository customerRepo;

    @GetMapping(value = "/")
    public String pageStart(){
        return "Hello There";
    }

    @GetMapping(value = "/customerList")
    public List<Customer> getCustomers(){
        return customerRepo.findAll();
    }

    @PostMapping(value = "/addCustomer")
    public String addCustomers(@RequestBody Customer customer){
        customerRepo.save(customer);
        return "Customer Added";
    }

}