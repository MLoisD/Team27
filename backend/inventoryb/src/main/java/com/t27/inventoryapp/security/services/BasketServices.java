 package com.t27.inventoryapp.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.t27.inventoryapp.model.*;
import com.t27.inventoryapp.repository.BasketRepository;

@Service
public class BasketServices {
    
    @Autowired
    private BasketRepository basketRepo;

    // public List<Basket> listBasketItems (Customer customer) {
    //     return basketRepo.findByCustomer(customer);
    // }
}
 