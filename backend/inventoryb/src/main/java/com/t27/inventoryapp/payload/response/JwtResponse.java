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

    /**
     * @return Long return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return String return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return String return the email
     */
    public String getEmail() {
        return useremail;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String useremail) {
        this.useremail = useremail;
    }

    /**
     * @return List<String> return the roles
     */
    public List<String> getRoles() {
        return roles;
    }

    /**
     * @param roles the roles to set
     */
    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

}
