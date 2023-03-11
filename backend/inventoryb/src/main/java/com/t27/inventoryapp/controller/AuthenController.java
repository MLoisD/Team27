package com.t27.inventoryapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.t27.inventoryapp.repository.*;
import com.t27.inventoryapp.model.*;
import com.t27.inventoryapp.security.jwt.*;
import com.t27.inventoryapp.payload.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/t27/auth")
public class AuthenController {
    
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepo;

    @Autowired
    RoleRepository roleRepo;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtTokenUtil jwtUtils;


}
