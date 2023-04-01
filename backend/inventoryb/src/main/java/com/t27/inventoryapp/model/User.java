//Note at the time of coding: I will be improving on the CRUD system I originally made for the customer class and adding comments on things I had learnt
// Java uses some constraints that make sure the values being passed into the SQL table are exact

package com.t27.inventoryapp.model;


import java.util.*;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
    @Table(name= "users", uniqueConstraints ={
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
    })
    
public class User {
    
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
    private String email;



    @Enumerated(EnumType.STRING)
    private NewRole role;

    @NotBlank
    @Size(max = 100)
    private String password;

    private boolean enabled;

    //to establish what user has what role
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "userid"),
    inverseJoinColumns = @JoinColumn(name = "roleid"))
    private Set<Role> roles = new HashSet<>();

    public boolean hasRoles(ERole roleName){
        Iterator<Role> iterator = this.roles.iterator();
        while(iterator.hasNext()){
            Role role = iterator.next();
            if(role.getName().equals(roleName)){
                return true;
            }
        }
        return false;
    }
    
    public User(String username, String email, String password){
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = NewRole.USER;
    }

    public User(){}
 
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
        return email;
    }


    public void setUseremail(String email) {
        this.email = email;
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
 
    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

}
