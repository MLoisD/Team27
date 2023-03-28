package com.t27.inventoryapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import com.t27.inventoryapp.model.*;

public interface UserRepository extends JpaRepository<User, Long> {
  @Query("SELECT u FROM User u WHERE u.username = :username")
  public User getUserByUsername(@Param("username") String username);

  @Query("SELECT u FROM User u WHERE u.email = ?1")
  public User findByEmail(String email);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);

  public User getUserByEmail(String email);

  public User getCustomerByUseremailAndUsername(String email,String name);
}
