package com.t27.inventoryapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "basket")
public class Basket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "BasketID")
    private Integer BasketID;
    
    @ManyToOne
    @JoinColumn(name = "bookid")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "userid")
    private User user;
 
    private int Quantity;

 
    public void setId(int id) {
        this.BasketID = id;
    }

    private double Price;

    public Integer getBasketId() {
        return BasketID;
    }

    public void setBasketId(Integer id) {
        this.BasketID = id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

   /*    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }  */

     public Long getCustomer() {
        return user.getId();
    }

    public void setCustomer(User user) {
        this.user = user;
    } 
 

    public int getQuantity() {
        return Quantity;
    }

    public void setQuantity(int quantity) {
        Quantity = quantity;
    }

    public double getPrice() {
        return Price;
    }

    public void setPrice(double price) {
        Price = price;
    }



}
