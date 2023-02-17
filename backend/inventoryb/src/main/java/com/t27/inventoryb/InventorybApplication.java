package com.t27.inventoryb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class InventorybApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventorybApplication.class, args);
	}

}
