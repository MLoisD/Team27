package com.t27.inventoryapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping(value = "/customerList/{userid}")
    public Customer getCustomer(@PathVariable Long userID){
        Customer foundThem = customerRepo.findById(userID).get();
        return foundThem;

    }

    @PostMapping(value = "/addCustomer")
    public String addCustomers(@RequestBody Customer customer){
        customerRepo.save(customer);
        return "Customer Added";
    }

    @PutMapping(value = "/updateCustomer/{userid}")
    public String updateCustomer(@PathVariable Long userID, @RequestBody Customer customer){
        Customer updatedC = customerRepo.findById(userID).get();
        updatedC.setUID(customer.getUID());
        updatedC.setUEmail(customer.getUEmail());
        updatedC.setUserType(customer.getUserType());
        updatedC.setUName(customer.getUName());
        updatedC.setPassword(customer.getPassword());
        customerRepo.save(updatedC);
        return "Customer Updated";
    }

    @DeleteMapping(value =  "/deleteCustomer/{userid}")
    public String deleteCustomer(@PathVariable Long userID){
        Customer deletedC = customerRepo.findById(userID).get();
        customerRepo.delete(deletedC);
        return "Deleted Customer, Customer ID was: " + userID;
    }

}