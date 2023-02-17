package com.t27.inventoryapp.controller;

import com.t27.inventoryapp.service.UserService;
import com.t27.inventoryapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController{
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New User Added";
    }
}