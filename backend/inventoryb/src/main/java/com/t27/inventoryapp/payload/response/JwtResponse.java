package com.t27.inventoryapp.payload.response;

import java.util.*;

public class JwtResponse {

    private String token;
    private String type = "Type";
    private Long id;
    private String username;
    private String useremail;
    private List<String> roles;

    public JwtResponse(String accessTok, Long id, String username, String useremail, List<String> roles) {
        this.token = accessTok;
        this.id = id;
        this.username = username;
        this.useremail = useremail;
        this.roles = roles;
    }

    public String getAccessTok() {
        return token;
    }

    public void setAccessTok(String accessTok){
        this.token = accessTok;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
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

    public String getEmail() {
        return useremail;
    }

    public void setEmail(String useremail) {
        this.useremail = useremail;
    }

    public List<String> getRoles() {
        return roles;
    }

}
