package com.osg.decanting.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DecantingMove {
	private String warehouseId;
	private String lodnum;
	private String item;
	private String untcas;
	private String totaUnits;
	private String suggestedToteMax;
	private String destinationZone;
	private String destinationLpn;
	
	public String getWarehouseId() {
		return warehouseId;
	}
	public void setWarehouseId(String warehouseId) {
		this.warehouseId = warehouseId;
	}
	public String getLodnum() {
		return lodnum;
	}
	public void setLodnum(String lodnum) {
		this.lodnum = lodnum;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getUntcas() {
		return untcas;
	}
	public void setUntcas(String untcas) {
		this.untcas = untcas;
	}
	public String getTotaUnits() {
		return totaUnits;
	}
	public void setTotaUnits(String totaUnits) {
		this.totaUnits = totaUnits;
	}
	public String getSuggestedToteMax() {
		return suggestedToteMax;
	}
	public void setSuggestedToteMax(String suggestedToteMax) {
		this.suggestedToteMax = suggestedToteMax;
	}
	public String getDestinationZone() {
		return destinationZone;
	}
	public void setDestinationZone(String destinationZone) {
		this.destinationZone = destinationZone;
	}
	public String getDestinationLpn() {
		return destinationLpn;
	}
	public void setDestinationLpn(String destinationLpn) {
		this.destinationLpn = destinationLpn;
	}
	
	
	
}
