package com.osg.decanting.model;

import java.sql.Timestamp;

public class DecantingException {
	private String reagrp_dsc;
	private String reacod ;
	private String reacod_dsc;
	private String reagrp;
	private String srclod;
	private String prtnum;
	private String usr_id;
	private Timestamp adddte;
	private Timestamp moddte;
	private String whId;
	
	public String getWhId() {
		return whId;
	}
	public void setWhId(String whId) {
		this.whId = whId;
	}
	public String getSrclod() {
		return srclod;
	}
	public void setSrclod(String srclod) {
		this.srclod = srclod;
	}
	public String getPrtnum() {
		return prtnum;
	}
	public void setPrtnum(String prtnum) {
		this.prtnum = prtnum;
	}
	public String getUsr_id() {
		return usr_id;
	}
	public void setUsr_id(String usr_id) {
		this.usr_id = usr_id;
	}
	public Timestamp getAdddte() {
		return adddte;
	}
	public void setAdddte(Timestamp adddte) {
		this.adddte = adddte;
	}
	public Timestamp getModdte() {
		return moddte;
	}
	public void setModdte(Timestamp moddte) {
		this.moddte = moddte;
	}
	public String getReagrp_dsc() {
		return reagrp_dsc;
	}
	public void setReagrp_dsc(String reagrp_dsc) {
		this.reagrp_dsc = reagrp_dsc;
	}
	public String getReacod() {
		return reacod;
	}
	public void setReacod(String reacod) {
		this.reacod = reacod;
	}
	public String getReacod_dsc() {
		return reacod_dsc;
	}
	public void setReacod_dsc(String reacod_dsc) {
		this.reacod_dsc = reacod_dsc;
	}
	public String getReagrp() {
		return reagrp;
	}
	public void setReagrp(String reagrp) {
		this.reagrp = reagrp;
	}
	
}
