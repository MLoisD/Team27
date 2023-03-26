package com.example.demo.entity;

import java.sql.Date;
import java.util.Arrays;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Entity
@Table(name = "book")

public class Book {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @GeneratedValue
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "BName")
    private String bname;

    public String getBName() {
        return bname;
    }

    public void setBName(String bname) {
        this.bname = bname;
    }

    // @Column(name = "Author")
    private String author;

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    // @Column(name = "DatePub")
    private Date datepub;

    public Date getDateput() {
        return datepub;
    }

    public void setDateput(Date datepub) {
        this.datepub = datepub;
    }

    // @Column(name = "Genre")
    private String genre;

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    // @Column(name = "AgeRate")
    private Integer agerate;

    public Integer getAgerate() {
        return agerate;
    }

    public void setAgerate(Integer agerate) {
        this.agerate = agerate;
    }

    private String stock;

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }
  

    @Column
    private String cover;

    // @Column(name = "Price")
    private Float price;

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    // @Column(name = "Description")
    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    private String category_id;

    public String getCategory_id() {
		return category_id;
	}
	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}




/* 
    public Book() {

    }

    public Book(Long id, String bookName, String author, Integer agerate, String cover, Date datepublished,
            String description, String genre, Float price, String image, String stock) {
        this.id = id;
        this.bname = bookName;
        this.author = author;
        this.agerate = agerate;
        this.cover = cover; // filename is cover
        this.datepub = datepublished;
        this.genre = genre;
        this.price = price;
        this.description = description;
        this.image = image;
        this.stock = stock;
      
    } */

  /*   public Book(String bookName, String author, Integer agerate, String cover, Date datepublished, String description,
            String genre, Float price, String image, String stock) {
        this.bname = bookName;
        this.author = author;
        this.agerate = agerate;
        this.cover = cover;
        this.datepub = datepublished;
        this.genre = genre;
        this.price = price;
        this.description = description;
        this.image = image;
        this.stock = stock;
    } */

    
      @Override
      public String toString() {
      return "Product [id=" + id + ", name=" + bname + ", Author=" + author + ", genre=" + genre
       + ", description=" + description + ", price=" + price + ", Date published=" + datepub + "]";
     }
     
}
