package com.t27.inventoryapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long userID;

    @Column
    private String u_name;

    @Column
    private String u_pass;

    @Column
    private String u_email;

    @Column
    private String u_type;

    
    public Long getUID() {
        return userID;
    }

    public void setUID(Long userID) {
        this.userID = userID;
    }

    public String getUName() {
        return u_name;
    }

    public void setUName(String u_name) {
        this.u_name = u_name;
    }

    public String getUEmail() {
        return u_email;
    }

    public void setUEmail(String u_email) {
        this.u_email = u_email;
    }

    public String getPassword() {
        return u_pass;
    }

    public void setPassword(String u_pass) {
        this.u_pass = u_pass;
    }

    public String getUserType() {
        return u_type;
    }

    public void setUserType(String u_type) {
        this.u_type = u_type;
    }

}
