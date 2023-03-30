package com.t27.inventoryapp.dto;


import com.t27.inventoryapp.model.ShoppingCart;

import java.util.List;

public class OrderDTO {

    private String ShipVia;
    private List<ShoppingCart> cartItems;
    private String customerEmail;
    private String customerName;

    public OrderDTO() {
    }

    public OrderDTO(String ShipVia, List<ShoppingCart> cartItems, String customerEmail, String customerName) {
        this.ShipVia = ShipVia;
        this.cartItems = cartItems;
        this.customerEmail = customerEmail;
        this.customerName = customerName;
    }

    public String getShippingDescription() {
        return ShipVia;
    }

    public void setShippingDescription(String ShipVia) {
        this.ShipVia = ShipVia;
    }

    public List<ShoppingCart> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<ShoppingCart> cartItems) {
        this.cartItems = cartItems;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    @Override
    public String toString() {
        return "OrderDTO{" +
                "orderDescription='" + ShipVia + '\'' +
                ", cartItems=" + cartItems +
                ", customerEmail='" + customerEmail + '\'' +
                ", customerName='" + customerName + '\'' +
                '}';
    }
}