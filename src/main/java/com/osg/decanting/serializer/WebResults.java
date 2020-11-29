package com.osg.decanting.serializer;

import com.redprairie.moca.MocaException;
import java.util.ArrayList;
import java.util.List;

public class WebResults<T> {
  private List<T> _data = new ArrayList<>();
  
  private int _status = 0;
  
  private String _message = "";
  
  private int _totalRows = -1;
  
  public List<T> getData() {
    return this._data;
  }
  
  public void setData(List<T> data) {
    this._data = data;
  }
  
  public int getStatus() {
    return this._status;
  }
  
  public void setStatus(int status) {
    this._status = status;
  }
  
  public String getMessage() {
    return this._message;
  }
  
  public void setMessage(String message) {
    this._message = message;
  }
  
  public void setTotalRows(int total) {
    this._totalRows = total;
  }
  
  public int getTotalRows() {
    return this._totalRows;
  }
  
  public void add(T data) {
    this._data.add(data);
  }
  
  public void handleException(Exception exception) {
    this._status = -1;
    if (exception instanceof MocaException)
      this._status = ((MocaException)exception).getErrorCode(); 
    this._message = exception.getMessage();
  }
}
