package com.t27.inventoryapp.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name="category")//have to add
public class Category {
	@Id
	long id;
	String genName;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return genName;
	}
	public void setName(String genName) {
		this.genName = genName;
	}
	
}