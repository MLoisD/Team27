package com.example.demo.service;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;



@Service
public interface BookService {
	
	Book save(Book book);

	List<Book> getBooks();
	List<Book> viewAll();


    }



	 



