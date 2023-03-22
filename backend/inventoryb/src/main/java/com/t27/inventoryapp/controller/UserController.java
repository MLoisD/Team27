package com.t27.inventoryapp.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.t27.inventoryapp.details.UserDetailsImpl;
import com.t27.inventoryapp.model.ERole;
import com.t27.inventoryapp.model.Role;
import com.t27.inventoryapp.model.User;
import com.t27.inventoryapp.repository.RoleRepository;
import com.t27.inventoryapp.repository.UserRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private RoleRepository roleRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    public User getCurrentUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(@CurrentSecurityContext(expression = "authenticated.name") String username) {
        System.out.println(username);
        SecurityContextHolder.getContext().setAuthentication(null);
        return new ResponseEntity<>("See you later", HttpStatus.OK);
    }

    @GetMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {

        // existing credentials
        if (userRepo.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest()
                    .body("Username is already in use");
        }

        if (userRepo.existsByEmail(user.getUseremail())) {
            return ResponseEntity.badRequest()
                    .body("Email is already in use");
        }

        User signupUser = new User(user.getUsername(), user.getUseremail(),
        bCryptPasswordEncoder.encode(user.getPassword()));

        Set<Role> gettingRoles = signupUser.getRoles();
        Set<Role> roles = new HashSet<>();

        // by default everyone signing up is a user, unless otherwise established
        if (gettingRoles == null) {
            Role userRole = roleRepo.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Role is not established"));
            roles.add(userRole);
        } else {
            gettingRoles.forEach(
                    role -> {
                        switch (role.toString()) {
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

        signupUser.setRoles(roles);
        userRepo.save(signupUser);

        return ResponseEntity.ok("User registered");
    }

    @PostMapping("/login")
    public ResponseEntity<UserDetails> login(@RequestBody User user) throws AuthenticationException {
        System.out.println(user);
        User loggedUser = userRepo.getUserByUsername(user.getUsername());

        if (user == null || !bCryptPasswordEncoder.matches(user.getPassword(), loggedUser.getPassword())) {
            throw new BadCredentialsException("Wrong username or password");
        }

        UserDetailsImpl userDetailsImpl = new UserDetailsImpl(loggedUser);
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                user.getUsername(), user.getPassword(), userDetailsImpl.getAuthorities()));

        boolean isAuthenticated = isAuthenticated(authentication);
        if (isAuthenticated) {
            SecurityContextHolder.getContext().setAuthentication(authentication);
            System.out.println(user.getUsername() + "is authenticated");
            return new ResponseEntity<>(new UserDetailsImpl(loggedUser), HttpStatus.OK);
        } else
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

    private boolean isAuthenticated(Authentication authentication) {
        return authentication != null && !(authentication instanceof AnonymousAuthenticationToken)
                && authentication.isAuthenticated();
    }

}
