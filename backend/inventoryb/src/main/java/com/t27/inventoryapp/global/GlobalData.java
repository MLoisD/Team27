package com.t27.inventoryapp.global;

import java.util.ArrayList;
import java.util.List;

import com.t27.inventoryapp.model.Book;

public class GlobalData {
 public static List<Book > cart;
 static{
    cart = new ArrayList<Book>();

 }  
}
