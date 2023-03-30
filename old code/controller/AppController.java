package com.t27.inventoryapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {
    
    @RequestMapping("/home")
    public String homeIsHere(){
        return "Home is here";
    }
}
