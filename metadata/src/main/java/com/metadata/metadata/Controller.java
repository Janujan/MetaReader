package com.metadata.metadata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {
    
    @Autowired
    private MetaDataRepository metaDataRepository;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public Iterable<MetaData> helloWorld(){
        return metaDataRepository.findAll();
    }

    @RequestMapping(value="/test", method=RequestMethod.GET)
    public String getWithParam( @RequestParam(value="name", defaultValue="world") String name){
        return "hello" + name;
    }

    @RequestMapping(value="/save-data", method = RequestMethod.POST)
    public MetaData postMetaData(@RequestBody MetaData meta){
        MetaData newMeta = new MetaData();
        newMeta.setFieldName(meta.getFieldName());
        newMeta.setFieldType(meta.getFieldType());
        metaDataRepository.save(newMeta);
        return newMeta;
    }
}