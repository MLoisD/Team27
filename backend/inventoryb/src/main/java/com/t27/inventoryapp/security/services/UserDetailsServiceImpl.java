package com.t27.inventoryapp.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;

import com.t27.inventoryapp.repository.UserRepository;
import com.t27.inventoryapp.model.*;

public class UserDetailsServiceImpl implements UserDetailsService{
    
    @Autowired
    UserRepository userRepo;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        User user = userRepo.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException("User Not found with username: " + username));

        return UserDetailsImpl.build(user);
    }



}
