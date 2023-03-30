package com.t27.inventoryapp.security;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.t27.inventoryapp.details.UserDetailsImpl;
import com.t27.inventoryapp.model.ERole;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class LoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler{
    
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,Authentication authentication) throws ServletException, IOException{

        UserDetailsImpl userDetailsImpl = (UserDetailsImpl) authentication.getPrincipal();

        String redirectURL = request.getContextPath();

        String roleAdmin = "ROLE_ADMIN";
        String roleUser = "ROLE_USER";

        if(userDetailsImpl.hasRole(ERole.valueOf(roleAdmin))){
            redirectURL = "admin_home";
        } else if(userDetailsImpl.hasRole(ERole.valueOf(roleUser))){
            redirectURL = "user_home";
        }

        response.sendRedirect(redirectURL);
    }
}
