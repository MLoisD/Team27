package com.example2.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ThissController {
    @RequestMapping("/hello")
    public String hello(){
        return "hi";
    }
    
}
