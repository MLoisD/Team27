package com.t27.inventoryapp.serviceImpl;

import com.t27.inventoryapp.model.Book;
import com.t27.inventoryapp.model.Category;
import com.t27.inventoryapp.repository.BookRepository;
import com.t27.inventoryapp.repository.CategoryRepository;
import com.t27.inventoryapp.security.services.*;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//added code
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class BookServiceImpl implements BookService {



    @Autowired
    private BookRepository bookRepository;
    @Autowired
	CategoryRepository categoryRepo;

    @Autowired
    BookService bookService;

    @Override
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book save(Book book) {
        return bookRepository.save(book);
    }

     @Override
    public List<Book> viewAll() {
        return (List<Book>) bookRepository.findAll();
    }

    @Override
    public List<Book>getProductsByCategory(String book_id){
		return bookRepository.getByCategoryId(book_id);
	}
	
    @Override
	public List<Category>getAllCategory(){
		return categoryRepo.findAll();
	}

 
     public Optional<Book> findById(long id) {
         return bookRepository.findById(id);
     }
 


}