package com.t27.inventoryapp.security.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;


public class JwtUtils {
   
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${t27.inventoryb.jwtSecret}")
    private String jwtSecret;

    //@Value("${t27.inventoryb.jwtExpirationMs}")
}
