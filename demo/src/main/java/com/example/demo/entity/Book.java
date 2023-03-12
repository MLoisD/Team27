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
//@Table (name = "book")

public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "BookID")
    private long Bookid;

    private long id = Bookid;

     public long getId() {
        return id;
    }

    public void setId(long Bookid) {
		this.Bookid = Bookid;
	}

    @Column(name = "BName") 
    private String bname;

     public String getBName() {
        return bname;
    }

    public void setBName(String bname) {
        this.bname = bname;
    }

    @Column(name = "Author") 
    private String author;
 
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Column(name = "DatePub") 
    private Date datepub;

     public Date getDateput() {
        return datepub;
    }

    public void setDateput(Date datepub) {
        this.datepub = datepub;
    }

    @Column(name = "Genre") 
    private String genre;

     public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Column(name = "AgeRate") 
    private Integer agerate;

     public Integer getAgerate() {
        return agerate;
    }

    public void setAgerate(Integer agerate) {
        this.agerate = agerate;
    }

    @Lob
    @Column(name = "Cover", length = Integer.MAX_VALUE, nullable = true) 
    private byte[] cover;

     public byte[] getCover() {
        return cover;
    }

    public void setCover(byte[] cover) {
        this.cover = cover;
    } 

   /*   public Blob getCover() {
        return cover;
    }

    public void setCover(Blob cover) {
        this.cover = cover;
    }  */

     @Column(name = "Price")
    private Float price;
 
    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    @Column(name = "Description") 
    private String description;

     public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    } 

    public Book(){

    }

    public Book(Long id, String bookName, String author, Date datepublished, String genre, Integer agerate, Float price, String description) {
        this.BookID= id;
        this.bname = bookName;
        this.author = author;
        this.agerate = agerate;
        //this.cover = cover;
        this.datepub = datepublished;
        this.genre = genre;
        this.price = price;
        this.description = description;
    }

 /*    @Override
	public String toString() {
		return "Product [id=" + id + ", name=" + bname + ", Author=" + author + ", description=" + description + ", price=" + price + ", cover="
				+ Arrays.toString(cover) + ", Date published=" + datepub + "]";
	}
   */
}