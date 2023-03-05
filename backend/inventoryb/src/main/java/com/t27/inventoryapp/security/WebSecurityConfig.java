package com.t27.inventoryapp.security;

import com.t27.inventoryapp.security.jwt.AuthTokenFilter;
import com.t27.inventoryapp.security.services.*;
import com.t27.inventoryapp.security.jwt.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;

@Configuration
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class WebSecurityConfig {

    @Autowired
     UserDetailsServiceImpl userDetailService;

    @Autowired
    private AuthEntryPointJwt unathorizedHandler;

    @Bean
    public AuthTokenFilter authenJwtTokenFilter() {
        return new AuthTokenFilter();
    }

    @Bean
    public DaoAuthenticationProvider authenProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
     
        return authProvider;
    }
}
