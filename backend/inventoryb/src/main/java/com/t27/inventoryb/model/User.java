package com.t27.inventoryapp.model;

import java.lang.persistence.Id;
import javax.annotation.processing.Generated;
import javax.persistence.Entity;

@Entity
public class User {

    @Id
    @GeneratedValue
    private int userID;
    private String username;
    private String userPass;
    private String userEmail;
    private String UserType;

    public User() {
    }

    public int getUID() {
        return userID;
    }

    public void setUID(int userID) {
        this.userID = userID;
    }

    public String getUName() {
        return username;
    }

    public void setUName(String username) {
        this.username = username;
    }

    public String getUEmail() {
        return userEmail;
    }

    public void setUEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getPassword() {
        return userPass;
    }

    public void setPassword(String userPass) {
        this.userPass = userPass;
    }
}
