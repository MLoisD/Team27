package com.t27.inventoryapp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.t27.inventoryapp.repository.*;
import com.t27.inventoryapp.model.Book;
import java.util.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class BookController {

    @Autowired
    private BookRepository bookRepo;

    // Gets a list of all customers
    @GetMapping(value = "/bookList")
    public List<Book> getBooks() {
        return bookRepo.findAll();
    }

    // adds book
    @PostMapping(value = "/addBook")
    public String addBooks(@RequestBody Book book) {
        bookRepo.save(book);
        return "Book Added";
    }

    // updates specific book
    @PutMapping(value = "/updateBook/{bookID}")
    public String updateCustomer(@PathVariable Long bookID, @RequestBody Book book) {
        Book updatedB = bookRepo.findById(bookID).get();
        updatedB.setBName(book.getBName());
        updatedB.setAuthor(book.getAuthor());
        updatedB.setDatepub(book.getDatepub());
        updatedB.setGenre(book.getGenre());
        updatedB.setAgeRate(book.getAgeRate());
        updatedB.setCover(book.getCover());
        updatedB.setPrice(book.getPrice());
        updatedB.setDescription(book.getDescription());
        bookRepo.save(updatedB);
        return "Book Updated";
    }

    // updates specific book stock level
    @PutMapping(value = "/updateBookStock/{bookID}")
    public String updateStockLvl(@PathVariable Long bookID, @RequestBody Book book) {
        Book updatedB = bookRepo.findById(bookID).get();
        updatedB.setStockNum(book.getStockNum());
        bookRepo.save(updatedB);
        return "Book Stock level has updated";
    }

    // deletes specified book
    @DeleteMapping(value = "/deleteBook/{bookID}")
    public String deleteBook(@PathVariable Long bookID) {
        Book deletedB = bookRepo.findById(bookID).get();
        bookRepo.delete(deletedB);
        return "Deleted Book, Book ID was: " + bookID;
    }

}
