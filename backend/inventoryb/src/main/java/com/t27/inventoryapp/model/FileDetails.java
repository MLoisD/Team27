package com.t27.inventoryapp.model;

import lombok.Data;
import lombok.NoArgsConstructor;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "file_details")
@Data
@NoArgsConstructor
public class FileDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column
  private String fileName;
  @Column
  private String fileUri;
  @Column
  private String fileDownloadUri;
  @Column
  private long fileSize;
  @Column
  private String uploaderName;

  public FileDetails(String fileName, String fileUri,
                     String fileDownloadUri, long fileSize,
                     String uploaderName) {

    this.fileName = fileName;
    this.fileUri = fileUri;
    this.fileDownloadUri = fileDownloadUri;
    this.fileSize = fileSize;
    this.uploaderName = uploaderName;
  }
}