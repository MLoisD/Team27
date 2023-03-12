package com.t27.inventoryapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.t27.inventoryapp.model.*;


public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Boolean existsbyUsername(String username);

    Boolean existsByEmail(String useremail);

}
