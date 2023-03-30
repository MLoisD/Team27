package com.t27.inventoryapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long BookID;

    @Column
    @NotNull
    private String BName;
  
    @Column
    @NotNull
    private String Author;

    @Column
    @NotNull
    private int yearPub;

    @Column
    @NotNull
    private String Genre;
    
    @Column
    @NotNull
    private int AgeRate;

    @Column
    @NotNull
    private String Cover;
    
    @Column
    @NotNull
    private float Price;

    @Column
    @NotNull
    private String Description;

    @Column
    @NotNull
    private int stockNum;

 
    public Long getBookID() {
        return BookID;
    }

    public void setBookID(Long BookID) {
        this.BookID = BookID;
    }

    public String getBName() {
        return BName;
    }

    public void setBName(String BName) {
        this.BName = BName;
    }

    public String getAuthor() {
        return Author;
    }

    public void setAuthor(String Author) {
        this.Author = Author;
    }


    public int getyearPub() {
        return yearPub;
    }

    public void setyearPub(int yearPub) {
        this.yearPub = yearPub;
    }


    public String getGenre() {
        return Genre;
    }


    public void setGenre(String Genre) {
        this.Genre = Genre;
    }


    public int getAgeRate() {
        return AgeRate;
    }

    public void setAgeRate(int AgeRate) {
        this.AgeRate = AgeRate;
    }

    public String getCover() {
        return Cover;
    }


    public void setCover(String Cover) {
        this.Cover = Cover;
    }


    public float getPrice() {
        return Price;
    }

    public void setPrice(float Price) {
        this.Price = Price;
    }

    public String getDescription() {
        return Description;
    }


    public void setDescription(String Description) {
        this.Description = Description;
    }

    public int getStockNum() {
        return stockNum;
    }

 
    public void setStockNum(int stockNum) {
        this.stockNum = stockNum;
    }

}
