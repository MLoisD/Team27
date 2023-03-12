//Note at the time of coding: I will be improving on the CRUD system I originally made for the customer class and adding comments on things I had learnt
// Java uses some constraints that make sure the values being passed into the SQL table are exact

package com.t27.inventoryapp.model;


import java.util.*;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.validation.constraints.Size;

@Entity
    @Table(name= "users", uniqueConstraints ={
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "useremail")
    })
    
public class User{
    
    //adding @notblank makes sure that there are no valid inputs that contain 'null'
    // that was an issue I faced during the prototype run

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 100)
    @Email
    private String useremail;

    @NotBlank
    @Size(max = 100)
    private String password;

    //to establish what user has what role
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "userid"),
    inverseJoinColumns = @JoinColumn(name = "roleid"))
    private Set<Role> roles = new HashSet<>();
    
    public User(String username, String useremail, String password){
        this.username = username;
        this.useremail = useremail;
        this.password = password;
    }

 
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

 
    public void setUsername(String username) {
        this.username = username;
    }


    public String getUseremail() {
        return useremail;
    }


    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

}
