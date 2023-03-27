package com.t27.inventoryapp.details;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.t27.inventoryapp.model.*;
import com.t27.inventoryapp.repository.*;

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
