package com.t27.inventoryapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.t27.inventoryapp.security.services.OrderService;

@Controller
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    @GetMapping("/cart")
    public String showBasket(){
        return "basket here";
    }
}
