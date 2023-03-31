package com.t27.inventoryapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name="BName")
    @NotNull
    private String bname;
  
    @Column(name="Author")
    @NotNull
    private String author;

    @Column(name="DatePub")
    @NotNull
    private int datepub;

    @Column(name="Genre")
    @NotNull
    private String genre;
    
    @Column(name="AgeRate")
    @NotNull
    private int agerate;

    @Column(name="Cover")
    @NotNull
    private String cover;
    
    @Column(name="Price")
    @NotNull
    private float price;

    @Column(name="Description")
    @NotNull
    private String description;

    @Column(name="stock")
    @NotNull
    private int stock;

    private String category_id;

    public String getCategory_id() {
		return category_id;
	}
	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}



    public Book(){}

    public Book(String bname, String author, int datepub, String genre, int agerate, String cover,float price,String description, int stock){
        this.agerate = agerate;
        this.author = author;
        this.description = description;
        this.datepub = datepub;
        this.genre = genre;
        this.price = price;
        this.stock = stock;
        this.bname = bname;
    }

 
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBName() {
        return bname;
    }

    public void setBName(String bname) {
        this.bname = bname;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }


    public int getDateput() {
        return datepub;
    }

    public void setDateput(int datepub) {
        this.datepub = datepub;
    }


    public String getGenre() {
        return genre;
    }


    public void setGenre(String genre) {
        this.genre = genre;
    }


    public int getAgerate() {
        return agerate;
    }

    public void setAgerate(int agerate) {
        this.agerate = agerate;
    }

    public String getCover() {
        return cover;
    }


    public void setCover(String cover) {
        this.cover = cover;
    }


    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }

    public int getStock() {
        return stock;
    }

 
    public void setStock(int stock) {
        this.stock = stock;
    }

}
