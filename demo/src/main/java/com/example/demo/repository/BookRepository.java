package com.example.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Book;

import java.util.List;
import java.util.Optional;


@Repository
public interface BookRepository extends JpaRepository<Book, Long>{
    
    public Optional<Book> findById(long bookID);
    List<Book> findBybnameContaining (String bname);
  

}

