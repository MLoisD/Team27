package com.t27.inventoryapp.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.t27.inventoryapp.details.UserDetailsImpl;
import com.t27.inventoryapp.model.*;
import com.t27.inventoryapp.repository.*;

import jakarta.transaction.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
    
    @Autowired
    UserRepository userRepo;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws  UsernameNotFoundException{
        User user = userRepo.getUserByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("Could not find user");
        }

        return UserDetailsImpl.build(user);
    }

   /* public User getLoggedInUser(Authentication authentication){
        if(authentication == null){
            return null;
        }
        User user = null;
        Object principle = authentication.getPrincipal();
        if(principle instanceof UserDetailsImpl){
            user = ((UserDetailsImpl) principle).getUsername();
        }*/ 

}
