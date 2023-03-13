package com.t27.inventoryapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class InventorybApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(InventorybApplication.class, args);
	}

}
