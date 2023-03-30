package com.t27.inventoryapp.security.services;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.t27.inventoryapp.model.*;
import com.t27.inventoryapp.repository.BookRepository;

//added
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;



@Service
public interface BookService {


	Book save(Book book);

	List<Book> getBooks();
	List<Book> viewAll();
	//List<Book> viewById(long id); 
	List<Book>getProductsByCategory(String book_id);
	List<Category>getAllCategory();
	Optional<Book> findById(long id);

    }



	 



