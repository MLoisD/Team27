package com.t27.inventoryapp.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import com.t27.inventoryapp.model.OrderItem;
import com.t27.inventoryapp.model.User;
import com.t27.inventoryapp.repository.OrderItemRepository;

@Service
public class OrderService {
    
    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<OrderItem> listOrder(User user){
        return orderItemRepository.findByUser(user);
    }
}
