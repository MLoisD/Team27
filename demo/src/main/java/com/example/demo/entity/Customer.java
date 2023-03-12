package com.example.entity;

import jakarta.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
   // private Integer id;
    
    //@Column(name = "CustomerID") 
    private Integer customerID;

    /* public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
 */
    public Integer getCustomerID() {
        return customerID;
    }

    public void setCustomerID(Integer customerID) {
        this.customerID = customerID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getUsertype() {
        return usertype;
    }

    public void setUsertype(String usertype) {
        this.usertype = usertype;
    }


    public Customer() {
    }

    public Customer(String username, String userpassword, String useremail, String usertype) {
        this.username = username;
        this.userpassword = userpassword;
        this.useremail = useremail;
        this.usertype = usertype;
    }

    public Customer(Integer customerID, String username, String userpassword, String useremail, String usertype) {
        this.customerID = customerID;
        this.username = username;
        this.userpassword = userpassword;
        this.useremail = useremail;
        this.usertype = usertype;

    }

    //@Column(name = "username") 
    private String username;

    //@Column(name = "userPass") 
    private String userpassword;

    //@Column(name = "userEmail") 
    private String useremail;

    //@Column(name = "userType") 
    private String usertype;

}




