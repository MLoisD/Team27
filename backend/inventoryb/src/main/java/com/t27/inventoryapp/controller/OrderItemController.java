package com.t27.inventoryapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.t27.inventoryapp.security.services.OrderService;

@Controller
public class OrderItemController {
    
    @Autowired
    private OrderService orderService;

    @GetMapping(value = "/basket")
    public String showBasket(Model model, @AuthenticationPrincipal Authentication authentication){

    }
}
