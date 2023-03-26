 package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Basket;
import com.example.demo.entity.Book;
import com.example.demo.entity.Customer;

@Repository
public interface BasketRepository extends JpaRepository<Basket, Integer> {
    
    public List<Basket> findByCustomer(Customer customer);
}
 