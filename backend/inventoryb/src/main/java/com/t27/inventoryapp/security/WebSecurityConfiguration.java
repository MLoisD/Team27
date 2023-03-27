package com.t27.inventoryapp.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.t27.inventoryapp.details.UserServices;

import org.springframework.security.web.session.SessionManagementFilter;

/* */
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;

@Configuration
@EnableWebSecurity
@ComponentScan
@CrossOrigin(origins =  {"http://localhost:3000", "http://localhost:8080"}, allowCredentials = "true", maxAge = 3600)
public class WebSecurityConfiguration {

    @Bean
    CORSFilter corsFilter() {
        CORSFilter filter = new CORSFilter();
        return filter;
    }

    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userServices() {
        return new UserServices(null);
    }

    @Bean
    DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userServices());
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .addFilterBefore(corsFilter(), SessionManagementFilter.class)
                .authorizeHttpRequests()
                .requestMatchers("/**").permitAll()
                .requestMatchers("/user/login").permitAll()
                .requestMatchers("/user/register").permitAll()
                .requestMatchers("/book/").permitAll()
                .requestMatchers("/book/**").permitAll()
                .requestMatchers("/book/addBook").hasRole("ADMIN")
                .requestMatchers("/book/updateBookStock/{bookID}").hasRole("ADMIN")
                .requestMatchers("/book/deleteBook/{bookID}").hasRole("ADMIN")
                .requestMatchers("/book/updateBook/{bookID}").hasRole("ADMIN")
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new FixingPopUp())
                .and().httpBasic();
        return http.build();

        // http.addFilterBefore(unauthorisedHandler,
        // UsernamePasswordAuthenticationFilter.class);
    }
}
