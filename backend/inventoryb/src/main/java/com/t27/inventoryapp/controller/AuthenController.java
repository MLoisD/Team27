package com.t27.inventoryapp.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.filter.OncePerRequestFilter;

import com.t27.inventoryapp.security.jwt.JwtUtils;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;

public class AuthenController extends OncePerRequestFilter{
    
    @Autowired
    protected void doFilterInternal(HttpServletRequest request, HttpServletRequest response, FilterChain filterChain) throws ServletException, IOException{
        try{
            String jwt = parseJwt(request);
            if(jwt != null && JwtUtils.getUserNameFromJwtToken(jwt)){
                String username = JwtUtils.getUserNameFromJwtToken(jwt);
                
            }
        }
    }
}
