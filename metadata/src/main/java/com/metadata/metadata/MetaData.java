package com.metadata.metadata;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // make a table out of this class 
public class MetaData{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="fieldname")
    private String fieldname;

    @Column(name="fieldtype")
    private String fieldtype;

    public MetaData(){}

    public MetaData(String fieldname, String fieldtype){
        this.fieldname = fieldname;
        this.fieldtype = fieldtype;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public void setFieldName(String fieldname) {
        this.fieldname = fieldname;
    }

    public void setFieldType(String fieldtype) {
        this.fieldtype = fieldtype;
    }

    public int getId() {
        return this.id;
    }

    public String getFieldName(){
        return this.fieldname;
    }

    public String getFieldType(){
        return this.fieldtype;
    }
}