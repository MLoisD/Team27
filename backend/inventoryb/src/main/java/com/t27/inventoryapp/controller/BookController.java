package com.t27.inventoryapp.controller;

import org.springframework.web.bind.annotation.RestController;
import com.t27.inventoryapp.exception.BookNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.t27.inventoryapp.repository.BookRepository;
import com.t27.inventoryapp.security.services.BookService;
import com.t27.inventoryapp.model.Book;
import com.t27.inventoryapp.model.Category;

import java.util.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BookController {

    @Autowired
    private BookRepository bookRepo;

    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public ResponseEntity<List<Book>> getBooks() {
        return ResponseEntity.ok(bookService.getBooks());
    }

    @PostMapping("/books")
    public Book createBook(@RequestBody Book book) {

        return bookRepo.save(book);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public List<Book> getAllFiles() {
        return this.bookService.getBooks();
    }

    @GetMapping("/books/{id}")
    Book getBookById(@PathVariable Long id) {
        return bookService.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));
    }

    @RequestMapping("getAllCategory")
    public List<Category> getAllCategory() {
        return bookService.getAllCategory();
    }

    @RequestMapping("getProductsByCategory")
    public List<Book> getProductsByCategory(@RequestBody HashMap<String, String> request) {
        String category_id = request.get("cat_id");
        return bookService.getProductsByCategory(category_id);
    }

    // adds book
    @PostMapping(value = "/addBook")
    public String addBooks(@RequestBody Book book) {
        bookRepo.save(book);
        return "Book Added";
    }

    // updates specific book
    @PutMapping(value = "/updateBook/{bookID}")
    public Book updateCustomer(@PathVariable Long bookID, @RequestBody Book newBook) {
        return bookRepo.findById(bookID).map(
                book -> {
                    book.setBName(newBook.getBName());
                    book.setAuthor(newBook.getAuthor());
                    book.setyearPub(newBook.getyearPub());
                    book.setGenre(newBook.getGenre());
                    book.setAgeRate(newBook.getAgeRate());
                    book.setCover(newBook.getCover());
                    book.setPrice(newBook.getPrice());
                    book.setDescription(newBook.getDescription());
                    return bookRepo.save(book);
                }).orElseThrow(() -> new BookNotFoundException(bookID));

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
        if (!bookRepo.existsById(bookID)) {
            throw new BookNotFoundException(bookID);
        }
        Book deletedB = bookRepo.findById(bookID).get();
        bookRepo.delete(deletedB);
        return "Deleted Book, Book ID was: " + bookID;
    }

    @GetMapping(value = "/bookList/{bookID}")
    public Book getBookByID(@PathVariable Long bookID) {
        return bookRepo.findById(bookID).orElseThrow(
                () -> new BookNotFoundException(bookID));
    }
}
