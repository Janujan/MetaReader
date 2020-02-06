package com.metadata.metadata;

public class MetaData{
    private String fieldName;
    private String fieldType;

    public MetaData(String fieldname, String fieldtype){
        this.fieldName = fieldname;
        this.fieldType = fieldtype;
    }
    public void setFieldName(String fieldname){
        this.fieldName = fieldname;
    }

    public void setFieldType(String fieldtype){
        this.fieldType = fieldtype;
    }

    public String getFieldName(){
        return this.fieldName;
    }

    public String getFieldType(){
        return this.fieldType;
    }
}