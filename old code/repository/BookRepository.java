package com.t27.inventoryapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.t27.inventoryapp.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{
    
}
