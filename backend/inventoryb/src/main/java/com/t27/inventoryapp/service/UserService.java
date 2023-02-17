package com.t27.inventoryapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.t27.inventoryapp.model.User;
import com.t27.inventoryapp.repository.UserRepository;

@Service
public class UserService implements UserSerInterface{

    @Autowired
    private UserRepository userRepo;
    
    @Override
    public User saveUser(User user){
        return userRepo.save(user);
    }
    
}
