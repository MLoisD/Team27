package com.example.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Book;
import com.example.repository.BookRepository;



@Service
public interface BookService {
	//private final BookRepository BookRepository;

/* 	public Optional<Book> getBookById(long BookID) {
		return bookRepository.findById(BookID);
	}

	public List<Book> getBooks() {
        return bookRepository.findAll(); */


		List<Book> getBooks();
    }



	 



