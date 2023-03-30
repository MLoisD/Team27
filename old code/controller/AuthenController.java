package com.t27.inventoryapp.controller;

import java.util.stream.Collectors;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.t27.inventoryapp.repository.*;

import jakarta.validation.Valid;

import com.t27.inventoryapp.details.UserDetailsImpl;
import com.t27.inventoryapp.model.*;
import com.t27.inventoryapp.payload.request.LoginRequest;
import com.t27.inventoryapp.payload.request.SignupRequest;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AuthenController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepo;

    @Autowired
    RoleRepository roleRepo;

    @Autowired
    PasswordEncoder encoder;

    // login method
    @PostMapping("/login")
    public ResponseEntity<?> authenticatingUser(@Valid @RequestBody LoginRequest LoginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(LoginRequest.getUsername(), LoginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok("You are logged in");

    }

    // signup method (covers existing usernames and emails, new users)
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest) {

        // existing credentials
        if (userRepo.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity.badRequest()
                    .body("Username is already in use");
        }

        if (userRepo.existsByEmail(signupRequest.getUseremail())) {
            return ResponseEntity.badRequest()
                    .body("Email is already in use");
        }

        User user = new User(signupRequest.getUsername(), signupRequest.getUseremail(),
                encoder.encode(signupRequest.getPassword()));

        Set<String> gettingRoles = signupRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        // by default everyone signing up is a user, unless otherwise established
        if (gettingRoles == null) {
            Role userRole = roleRepo.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Role is not established"));
            roles.add(userRole);
        } else {
            gettingRoles.forEach(
                    role -> {
                        switch (role) {
                            case "admin":
                                Role adminRole = roleRepo.findByName(ERole.ROLE_ADMIN)
                                        .orElseThrow(() -> new RuntimeException("Role is not established"));
                                roles.add(adminRole);

                                break;
                            default:
                                Role userRole = roleRepo.findByName(ERole.ROLE_USER)
                                        .orElseThrow(() -> new RuntimeException("Role is not established"));
                                roles.add(userRole);
                        }
                    });
        }

        user.setRoles(roles);
        userRepo.save(user);

        return ResponseEntity.ok("User registered");

    }

    //show all users

    //show all books

    

}
