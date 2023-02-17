package com.t27.inventoryapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository; 
import com.t27.inventoryapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
    
}  