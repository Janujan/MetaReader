package com.metadata.metadata;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.metadata.metadata.MetaData;

@CrossOrigin(origins = "http://localhost:4200")
public interface MetaDataRepository extends CrudRepository<MetaData, Integer> {
}