package com.t27.inventoryapp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.t27.inventoryapp.repository.*;
import com.t27.inventoryapp.model.Book;
import java.util.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class BookController {
    
    @Autowired
    private BookRepository bookRepo;

      //Gets a list of all customers
      @GetMapping(value = "/bookList")
      public List<Book> getBooks(){
          return bookRepo.findAll();
      }
  
    
    //adds customer
    @PostMapping(value = "/addBook")
    public String addCustomers(@RequestBody Book book){
        bookRepo.save(book);
        return "Book Added";
    }
}
