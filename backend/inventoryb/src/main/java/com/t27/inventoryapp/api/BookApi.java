//this is a replacement for the CRUD BookController class used in the prototype
package com.t27.inventoryapp.api;

import com.t27.inventoryapp.model.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import com.t27.inventoryapp.repository.BookRepository;
import java.net.URI;
import jakarta.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/bookmanagement")
public class BookApi {
    
    @Autowired
    private BookRepository bookRepo;

    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody @Valid Book book){
        Book savedB = bookRepo.save(book);
        URI bookURI = URI.create("/bookmanagement/" + savedB.getBookID());
        return ResponseEntity.created(bookURI).body(savedB);
    }

    @GetMapping(value = "/booklisted")
    public List<Book> getBooks() {
        return bookRepo.findAll();
    }
}
