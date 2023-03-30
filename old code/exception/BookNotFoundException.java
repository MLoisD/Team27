package com.t27.inventoryapp.exception;

public class BookNotFoundException extends RuntimeException{
    
    public BookNotFoundException(Long id){
        super("Couldn't find subject with id:" + id);
    }
}
