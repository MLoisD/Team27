package com.example.demo.controller;

import com.example.demo.entity.Book;
import com.example.demo.repository.BookRepository;
import com.example.demo.exception.BookNotFoundException;
import com.example.demo.repository.BookRepository;
import com.example.demo.exception.BookNotFoundAdvice;
import com.example.demo.service.*;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BookController {
	
    @Autowired
    private BookService bookService;

    @Autowired
    private BookRepository bookRepository;


    
    @GetMapping("/books")
    public ResponseEntity<List<Book>> getBooks(){
        return ResponseEntity.ok(bookService.getBooks());
    }


    @PostMapping("/books")
    public ResponseEntity<?> createBook(@RequestBody Book book) {
        bookService.save(book);
        return new ResponseEntity<>("Customer Created Successfully",HttpStatus.CREATED);
    }


    
  @GetMapping
  @ResponseStatus(code = HttpStatus.OK)
  public List<Book> getAllFiles() {
    return this.bookService.getBooks();
  }

   @GetMapping("/books/{id}")
   Book getBookById(@PathVariable Long id){
     return bookRepository.findById(id)
     .orElseThrow(()->new BookNotFoundException(id));
   }


   
 

}










/* 	@GetMapping("book/display/{id}")
	
	void showBook(@PathVariable("id") Integer id, HttpServletResponse response, Optional<Book> book)
			throws ServletException, IOException {
		log.info("Id :: " + id);
		book = bookService.getBookById(id);
		response.setContentType("image/jpeg, image/jpg, image/png, image/gif");
		response.getOutputStream().write(book.get().getCover());
		response.getOutputStream().close();
	}

 		

}
 */





































/* @RestController
public class BookController {
    @Autowired
    private BookRepository BookRepository;

    @GetMapping("/books")
    public List<Book> getBooks(@RequestParam("search") Optional<String> searchParam){
        return (List<Book>) searchParam.map( param->BookRepository.getContainingBook(param) )
                .orElse(BookRepository.findAll());
    }

    @GetMapping("/book/{bookId}" )
    public ResponseEntity<String> readBook(@PathVariable("BookId") Long id) {
        return ResponseEntity.of(BookRepository.findById(id).map(Book::getBname));
    }

    @PostMapping("/books")
    public Book addBook(@RequestBody String book) {
        Book q = new Book();
        q.setBname(book);
        return BookRepository.save(q);
    }

    @RequestMapping(value="/books/{BookID}", method=RequestMethod.DELETE)
    public void deleteBook(@PathVariable(value = "BookID") Long id) {
        BookRepository.deleteById(id);
    }
    


}
 */