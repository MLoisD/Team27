package com.t27.inventoryapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long BookID;

    @Column
    private String BName;
  
    @Column
    private String Author;

    @Column
    private Date Datepub;

    @Column
    private String Genre;
    
    @Column
    private int AgeRate;

    @Column
    private String Cover;
    
    @Column
    private int Price;

    @Column
    private String Description;

 
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


    public Date getDatepub() {
        return Datepub;
    }

    public void setDatepub(Date Datepub) {
        this.Datepub = Datepub;
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


    public int getPrice() {
        return Price;
    }

    public void setPrice(int Price) {
        this.Price = Price;
    }

    public String getDescription() {
        return Description;
    }


    public void setDescription(String Description) {
        this.Description = Description;
    }

}
