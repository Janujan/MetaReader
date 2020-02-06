package com.metadata.metadata;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {
    
    @RequestMapping(value="/", method = RequestMethod.GET)
    public String helloWorld(){
        return "Welcome to MetaDataReader API!";
    }

    @RequestMapping(value="/test", method=RequestMethod.GET)
    public String getWithParam( @RequestParam(value="name", defaultValue="world") String name){
        return "hello" + name;
    }

    @RequestMapping(value="/save-data", method = RequestMethod.POST)
    public MetaData[] postHelloWorld(@RequestBody MetaData[] meta){
        return meta;
    }
}