package com.t27.inventoryapp.payload.request;

import java.util.*;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class SignupRequest {
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

    private Set<String> roles;


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

    public Set<String> getRoles() {
		return roles;
	}

	public void setRoles(Set<String> roles) {
		this.roles = roles;
	}
}
