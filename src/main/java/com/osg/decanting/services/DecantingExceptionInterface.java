package com.osg.decanting.services;

import java.io.IOException;

public interface DecantingExceptionInterface {
	
	public String findAll(String reagrp, String username, String password) throws IOException;
	
	public String save(String whId, String reagrp, String username, String password, String reacod, String srclod, String prtnum ) ;


}
