package com.t27.inventoryapp.details;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.t27.inventoryapp.model.Role;
import com.t27.inventoryapp.model.User;

public class UserDetailsImpl implements UserDetails{

    private User user;

    public UserDetailsImpl(User user){
        this.user = user;
    }

    public Collection<? extends GrantedAuthority> getAuthorities(){
        Set<Role> roles = user.getRoles();

        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

        for (Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName().toString()));
        }
        return authorities;

    }


    @Override
    public String getPassword() {
        return user.getPassword();
    }
 
    @Override
    public String getUsername() {
        return user.getUseremail();
    }
 
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
 
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
 
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
 
    @Override
    public boolean isEnabled() {
        return user.isEnabled();
    }
    
}
