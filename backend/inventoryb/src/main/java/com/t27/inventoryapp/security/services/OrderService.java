package com.t27.inventoryapp.security.services;


import com.t27.inventoryapp.model.*;
import com.t27.inventoryapp.repository.OrderRepository;
import com.t27.inventoryapp.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private OrderRepository orderRepository;
    private BookRepository bookRepository;

    public OrderService(OrderRepository orderRepository, BookRepository bookRepository) {
        this.orderRepository = orderRepository;
        this.bookRepository = bookRepository;
    }

    public Order getOrderDetail(int orderId) {
        Optional<Order> order = this.orderRepository.findById(orderId);
        return order.isPresent() ? order.get() : null;
    }

    public float getCartAmount(List<ShoppingCart> shoppingCartList) {

        float totalCartAmount = 0f;
        float singleCartAmount = 0f;
        int stock = 0;

        for (ShoppingCart cart : shoppingCartList) {

            long productId = cart.getProductId();
            Optional<Book> product = bookRepository.findById(productId);
            if (product.isPresent()) {
                Book product1 = product.get();
                if (product1.getStock() < cart.getQuantity()) {
                    singleCartAmount = product1.getPrice() * product1.getStock();
                    cart.setQuantity(product1.getStock());
                } else {
                    singleCartAmount = cart.getQuantity() * product1.getPrice();
                    stock = product1.getStock() - cart.getQuantity();
                }
                totalCartAmount = totalCartAmount + singleCartAmount;
                product1.setStock(stock);
                stock=0;
                cart.setProductName(product1.getBName());
                cart.setAmount(singleCartAmount);
                bookRepository.save(product1);
            }
        }
        return totalCartAmount;
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }
}