package com.t27.inventoryapp.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.t27.inventoryapp.security.jwt.AuthEntryPointJwt;
import com.t27.inventoryapp.security.jwt.AuthTokenFilter;
import com.t27.inventoryapp.security.services.UserDetailsServiceImpl;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableMethodSecurity(prePostEnabled = false, securedEnabled = false, jsr250Enabled = true)
public class WebSecConfig {

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    private AuthEntryPointJwt unauthorisedHandler;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthTokenFilter authJwtTokenFilter() {
        return new AuthTokenFilter();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenProvider = new DaoAuthenticationProvider();

        authenProvider.setUserDetailsService(userDetailsService);

        authenProvider.setPasswordEncoder(passwordEncoder());

        return authenProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests()
        .requestMatchers("/home").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")
        .requestMatchers("/").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")
        .requestMatchers("/edit/**").hasAnyAuthority("ROLE_ADMIN")
        .requestMatchers("/delete/**").hasAnyAuthority("ROLE_ADMIN")
        .anyRequest().authenticated()
                .and()
                .formLogin(login -> 
                login.loginPage("/login").usernameParameter("email")
                .defaultSuccessUrl("/users").successHandler(loginSuccess).permitAll())
                .logout(logout -> logout.logoutSuccessUrl("/home").permitAll());
        return http.build();

       // http.addFilterBefore(unauthorisedHandler, UsernamePasswordAuthenticationFilter.class);
    }

    @Autowired
    private LoginSuccessHandler loginSuccess;
}
