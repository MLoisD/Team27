package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelExtensionsKt;
import org.springframework.web.bind.annotation.GetMapping;

/* import com.example.demo.service.CustomerService;

@Controller
public class BasketController {

    @Autowired
    private BasketServices basketService;

    @Autowired
    private CustomerService customerService; */
import com.example.entity.Basket;
import com.example.entity.Book;
import com.example.entity.Customer;
import com.example.service.BasketServices;

 /*  @GetMapping("/basket")
    public String showShoppingCart(Model model){
       Customer customer = customer.getCustomerID();
        List<Basket> basketItems = basketService.listBasketItems(customer);
        return "shopping_basket";s
    }
  }
     */
     
//}
