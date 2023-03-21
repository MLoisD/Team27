package com.t27.inventoryapp.security.jwt;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.security.core.Authentication;

import com.t27.inventoryapp.details.UserDetailsImpl;
import com.t27.inventoryapp.security.services.*;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.*;

@Component
public class JwtTokenUtil {

    private static final Logger logger = LoggerFactory.getLogger(JwtTokenUtil.class);

    private static final long EXPIRE_DURATION = 24 * 60 * 60 * 1000;
    
    @Value("${app.jwt.secret}")
    private String SECRET_KEY;

    public String generateJwtToken(Authentication authentication){

        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        return Jwts.builder().setSubject((userPrincipal.getUsername())).setIssuedAt(new Date())
            .setExpiration(new Date((new Date()).getTime() + EXPIRE_DURATION))
            .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
            .compact();
    }

    public String getUserNameFromJwtToken(String token){
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token)
            .getBody().getSubject();
    }

    public boolean validateJwtToken(String authenToken){
        try{
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(authenToken);
            return true;
        }  catch (SignatureException e) {
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
