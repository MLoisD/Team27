package com.t27.inventoryapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.t27.inventoryapp.model.OrderItem;
import com.t27.inventoryapp.model.User;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer>{
    
    public List<OrderItem> findByUser(User user);
}
