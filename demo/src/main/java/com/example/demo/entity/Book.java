package com.example.demo.entity;

import java.sql.Date;
import java.util.Arrays;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@jakarta.persistence.Entity
@Table (name = "book")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {

  //  public Book(){}
  /*   public Book(Integer id, String bname, String author, Date datepub, String genre,  Integer agerate, byte[] cover, Float price, String description) {
        super();
        this.id = id;
        this.bname=bname;
        this.author = author;
        this.price = price;
        this.agerate = agerate;
        this.description = description;
        this.cover = cover;
        this.datepub = datepub;

    } */
/* 
    public Book (){
        super();
    }
     */
   
     

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BookID")
        private int id;

     public String getBook(){
        return bname;
    }

    public void setBook(String bname){
        this.bname = bname;
    }  

     public int getId() {
        return id;
    }

    public void setId(int id) {
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

 /*    @Override
	public String toString() {
		return "Product [id=" + id + ", name=" + bname + ", Author=" + author + ", description=" + description + ", price=" + price + ", cover="
				+ Arrays.toString(cover) + ", Date published=" + datepub + "]";
	}
   */
}