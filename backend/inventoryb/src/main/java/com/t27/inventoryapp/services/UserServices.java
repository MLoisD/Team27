package com.t27.inventoryapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.t27.inventoryapp.details.UserDetailsImpl;
import com.t27.inventoryapp.model.*;
import com.t27.inventoryapp.repository.*;

@Service
@Transactional
public class UserServices implements UserDetailsService{
    
    @Autowired
    private UserRepository userRepo;

    public UserServices(Object object) {
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        User user = userRepo.getUserByEmail(username);
        if(user == null){
            throw new UsernameNotFoundException("Could not find user with that email");
        }
        return new UserDetailsImpl(user);
    }
}
