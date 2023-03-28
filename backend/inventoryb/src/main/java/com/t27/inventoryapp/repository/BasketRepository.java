 package com.t27.inventoryapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.t27.inventoryapp.model.*;

@Repository
public interface BasketRepository extends JpaRepository<Basket, Integer> {
    
    public List<Basket> findByUser(User customer);
}
 