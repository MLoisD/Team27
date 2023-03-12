 package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Basket;
import com.example.entity.Book;
import com.example.entity.Customer;

@Repository
public interface BasketRepository extends JpaRepository<Basket, Integer> {
    
    public List<Basket> findByCustomer(Customer customer);
}
 