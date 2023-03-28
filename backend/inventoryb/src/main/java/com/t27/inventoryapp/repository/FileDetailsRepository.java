package com.t27.inventoryapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.t27.inventoryapp.model.FileDetails;

public interface FileDetailsRepository extends JpaRepository<FileDetails, Integer> {

}