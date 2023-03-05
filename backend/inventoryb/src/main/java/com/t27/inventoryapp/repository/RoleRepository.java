package com.t27.inventoryapp.repository;

import java.util.Optional; 

import org.springframework.data.jpa.repository.JpaRepository;

import com.t27.inventoryapp.model.*;


public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}