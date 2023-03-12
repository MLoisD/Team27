 package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Basket;
import com.example.entity.Customer;
import com.example.repository.BasketRepository;

@Service
public class BasketServices {
    
    @Autowired
    private BasketRepository basketRepo;

    public List<Basket> listBasketItems (Customer customer) {
        return basketRepo.findByCustomer(customer);
    }
}
 