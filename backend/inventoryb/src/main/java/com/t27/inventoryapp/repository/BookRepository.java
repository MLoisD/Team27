package com.t27.inventoryapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.t27.inventoryapp.model.Book;

public interface BookRepository extends JpaRepository<Book,Long>{
    Optional<Book> findById(Long id);

    @Query("Select book FROM Book book WHERE book.category_id=:cat_id")
	List<Book> getByCategoryId(@Param("cat_id")String cat_id);
}
