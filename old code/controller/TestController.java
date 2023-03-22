package com.t27.inventoryapp.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/t27/test")
public class TestController {
    
    @GetMapping("/all")
    public String allAccess(){
        return "Public Content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public String userAccess(){
        return "User Content.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String addAccess(){
        return "Admin Content.";
    }

    @GetMapping("/userOnly")
    @PreAuthorize("hasRole('USER')")
    public String userOnlyAccess(){
        return "User Only Content.";
    }

}
