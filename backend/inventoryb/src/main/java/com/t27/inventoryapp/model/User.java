package com.t27.inventoryapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private int userID;
    private String username;
    private String userPass;
    private String userEmail;
    private String userType;

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

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

}
