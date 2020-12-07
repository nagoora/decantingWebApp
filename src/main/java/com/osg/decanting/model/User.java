package com.osg.decanting.model;

public class User {

	private String userName;
	private String password;
	private String SESSION_KEY;
	private String USR_ID;
	private String LOCALE_ID;
	private String warehouseId;
	private boolean status;
	private String statusMessage;
	
	public String getSESSION_KEY() {
		return SESSION_KEY;
	}
	public void setSESSION_KEY(String sESSION_KEY) {
		SESSION_KEY = sESSION_KEY;
	}
	public String getUSR_ID() {
		return USR_ID;
	}
	public void setUSR_ID(String uSR_ID) {
		USR_ID = uSR_ID;
	}
	public String getLOCALE_ID() {
		return LOCALE_ID;
	}
	public void setLOCALE_ID(String lOCALE_ID) {
		LOCALE_ID = lOCALE_ID;
	}
	
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getStatusMessage() {
		return statusMessage;
	}
	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getWarehouseId() {
		return warehouseId;
	}
	public void setWarehouseId(String warehouseId) {
		this.warehouseId = warehouseId;
	}
	
	
}
