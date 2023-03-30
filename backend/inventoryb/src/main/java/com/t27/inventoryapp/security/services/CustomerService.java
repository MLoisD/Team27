package com.t27.inventoryapp.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.t27.inventoryapp.model.User;
import com.t27.inventoryapp.repository.UserRepository;


public interface CustomerService {


    User save(User User);
    List<User> getUsers();
    public User saveUser(User customer);
    public Integer isCustomerPresent(User customer);

}  