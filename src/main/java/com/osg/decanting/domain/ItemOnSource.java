package com.osg.decanting.domain;

import java.io.Serializable;

public class ItemOnSource implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -6603541021620609253L;
	private String prtnum;
	private String lodnum;
	private String total_units;
	private String item_description;
	private Integer untcas;
	private String prt_client_id;
	private String wh_id;
	private String data;
	private String file_typ;
	private String img_src;

	public String getPrtnum() {
		return prtnum;
	}
	public void setPrtnum(String prtnum) {
		this.prtnum = prtnum;
	}
	public String getLodnum() {
		return lodnum;
	}
	public void setLodnum(String lodnum) {
		this.lodnum = lodnum;
	}
	public String getTotal_units() {
		return total_units;
	}
	public void setTotal_units(String total_units) {
		this.total_units = total_units;
	}
	public String getItem_description() {
		return item_description;
	}
	public void setItem_description(String item_description) {
		this.item_description = item_description;
	}
	public Integer getUntcas() {
		return untcas;
	}
	public void setUntcas(Integer untcas) {
		this.untcas = untcas;
	}
	public String getPrt_client_id() {
		return prt_client_id;
	}
	public void setPrt_client_id(String prt_client_id) {
		this.prt_client_id = prt_client_id;
	}
	public String getWh_id() {
		return wh_id;
	}
	public void setWh_id(String wh_id) {
		this.wh_id = wh_id;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getFile_typ() {
		return file_typ;
	}
	public void setFile_typ(String file_typ) {
		this.file_typ = file_typ;
	}
	public String getImg_src() {
		return img_src;
	}
	public void setImg_src(String img_src) {
		this.img_src = img_src;
	}
	
	
}
