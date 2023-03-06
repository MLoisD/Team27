package com.t27.inventoryapp.security.jwt;

import com.t27.inventoryapp.security.services.*;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;


public class JwtUtils {
   
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${t27.inventoryb.jwtSecret}")
    private String jwtSecret;

    @Value("${t27.inventoryb.jwtExpirationMs}")
    private int jwtExpirationMs;

    public String generateJwtToken(UserDetailsImpl userFirst){
        return generateJwtToken(userFirst.getUsername());
    }

    public String getUserNameFromJwtToken(String token){
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
    }

    public boolean validateJwtToken(String authenticToken){
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
          } catch (SignatureException e) {
            logger.error("Invalid JWT signature: {}", e.getMessage());
          } catch (MalformedJwtException e) {
            logger.error("Invalid JWT token: {}", e.getMessage());
          } catch (ExpiredJwtException e) {
            logger.error("JWT token is expired: {}", e.getMessage());
          } catch (UnsupportedJwtException e) {
            logger.error("JWT token is unsupported: {}", e.getMessage());
          } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty: {}", e.getMessage());
          }
      
          return false;
    }
}
