package com.metadata.metadata;

import org.springframework.data.repository.CrudRepository;
import com.metadata.metadata.MetaData;

public interface MetaDataRepository extends CrudRepository<MetaData, Integer> {
}