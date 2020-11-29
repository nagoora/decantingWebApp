package com.osg.decanting.domain;

import java.io.Serializable;

public class Invlod implements Serializable {
	private static final long serialVersionUID = 1L;
	private String lodnum;
	private String wh_Id;
	
	public String getLodnum() {
		return lodnum;
	}
	public void setLodnum(String lodnum) {
		this.lodnum = lodnum;
	}
	public String getWh_Id() {
		return wh_Id;
	}
	public void setWh_Id(String wh_Id) {
		this.wh_Id = wh_Id;
	}
	
	
}
