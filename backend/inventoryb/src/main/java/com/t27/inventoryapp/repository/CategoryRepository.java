package com.t27.inventoryapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.t27.inventoryapp.model.*;;

public interface CategoryRepository  extends JpaRepository<Category, Long> {

}