package com.t27.inventoryapp.controller;

import java.util.HashSet;
import java.util.Set;
import org.springframework.http.HttpHeaders;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;

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
import ch.qos.logback.core.util.Duration;
import lombok.RequiredArgsConstructor;

import com.t27.inventoryapp.details.UserDetailsImpl;
import com.t27.inventoryapp.model.ERole;
import com.t27.inventoryapp.model.NewRole;
import com.t27.inventoryapp.model.Role;
import com.t27.inventoryapp.model.User;
import com.t27.inventoryapp.repository.RoleRepository;
import com.t27.inventoryapp.repository.UserRepository;
import com.t27.inventoryapp.request.LoginRequest;
@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"}, allowCredentials = "true")
@RequestMapping("/user")
public class UserController {
    @Value("${cookies.domain}")
    private String domain;

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
        return new ResponseEntity<>("GoodBye", HttpStatus.OK);
    }
    //getmapping
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody AuthenticationRequest user) {

        // existing credentials
        if (userRepo.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest()
                    .body("Username is already in use");
        }

        if (userRepo.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest()
                    .body("Email is already in use");
        }

        // User signupUser = new User(user.getUsername(), user.getEmail(),
        // bCryptPasswordEncoder.encode(user.getPassword()), user.getRole(NewRole.USER));
             
        var signupUser = User.builder()
            .username(user.getUsername())
            .email(user.getEmail())
            .password(bCryptPasswordEncoder.encode(user.getPassword()))
            .role(NewRole.USER)
            .enabled(true)
            .build();
        // Set<Role> gettingRoles = signupUser.getRoles();
        // Set<Role> roles = new HashSet<>();

        // by default everyone signing up is a user, unless otherwise established
        // if (gettingRoles == null) {
        //     Role userRole = roleRepo.findByName(ERole.ROLE_USER)
        //             .orElseThrow(() -> new RuntimeException("Role is not established"));
        //     roles.add(userRole);
        // } else {
        //     gettingRoles.forEach(
        //             role -> {
        //                 switch (role.toString()) {
        //                     case "admin":
        //                         Role adminRole = roleRepo.findByName(ERole.ROLE_ADMIN)
        //                                 .orElseThrow(() -> new RuntimeException("Role is not established"));
        //                         roles.add(adminRole);

        //                         break;
        //                     default:
        //                         Role userRole = roleRepo.findByName(ERole.ROLE_USER)
        //                                 .orElseThrow(() -> new RuntimeException("Role is not established"));
        //                         roles.add(userRole);
        //                 }
        //             });
        // }

        // signupUser.setRoles(roles);
        userRepo.save(signupUser);

        return ResponseEntity.ok("User registered");
    }

    // @PostMapping("/login")
    // public ResponseEntity<UserDetails> login(@RequestBody LoginRequest user) throws AuthenticationException {
    //     System.out.println(user);
    //     User loggedUser = userRepo.getUserByUsername(user.getUsername());

    //     if (user == null || !bCryptPasswordEncoder.matches(user.getPassword(), loggedUser.getPassword())) {
    //         throw new BadCredentialsException("Wrong username or password");
    //     }

    //     UserDetailsImpl userDetailsImpl = new UserDetailsImpl(loggedUser);
    //     Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
    //             user.getUsername(), user.getPassword(), userDetailsImpl.getAuthorities()));

    //     boolean isAuthenticated = isAuthenticated(authentication);
    //     if (isAuthenticated) {
    //         SecurityContextHolder.getContext().setAuthentication(authentication);
    //         System.out.println(user.getUsername() + "is authenticated");
    //         return new ResponseEntity<>(new UserDetailsImpl(loggedUser), HttpStatus.OK);
    //     } else
    //         return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    // }

    // private boolean isAuthenticated(Authentication authentication) {
    //     return authentication != null && !(authentication instanceof AnonymousAuthenticationToken)
    //             && authentication.isAuthenticated();
    // }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()));

            var user = userRepo.findByEmail(request.getEmail());

            if (user == null || !bCryptPasswordEncoder.matches(request.getPassword(), user.getPassword())) {
                throw new BadCredentialsException("Wrong username or password");
            }
           
            // ResponseCookie cookie = ResponseCookie.from("status", "logged")
            //     .domain(domain)
            //     .path("/")
            //     // 0.001 == 1 day
            //     // 0.000001 == 1 minute-ish
            //     .maxAge(Duration.buildByDays(0.001).getMilliseconds())
             
            //     .build();
            //  return ResponseEntity.ok()
            //     .header(HttpHeaders.SET_COOKIE, cookie.toString())
            //     .body(user.getRole().toString());
            return ResponseEntity.ok(user.getRole().toString());
        } catch (BadCredentialsException ex) {
            return ResponseEntity.badRequest()
                    .body("Invalid username or password");
        }
    }


}
