package com.t27.inventoryapp.model;


import lombok.ToString;

import jakarta.persistence.*;
import java.util.List;

@ToString
@Entity
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private String ShipVia;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "CustomerID", referencedColumnName = "id")
    private User customer;


    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, targetEntity = ShoppingCart.class)
    @JoinColumn(name = "OrderID", referencedColumnName = "id")
    private List<ShoppingCart> cartItems;

    public Order() {
    }

    public Order(String ShipVia, User customer, List<ShoppingCart> cartItems) {
        this.ShipVia = ShipVia;
        this.customer = customer;
        this.cartItems = cartItems;
    }


    public String getShippingDescription() {
        return ShipVia;
    }

    public void setShippingDescription(String ShipVia) {
        this.ShipVia = ShipVia;
    }

    public User getCustomer() {
        return customer;
    }

    public void setCustomer(User customer) {
        this.customer = customer;
    }

    public List<ShoppingCart> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<ShoppingCart> cartItems) {
        this.cartItems = cartItems;
    }
}