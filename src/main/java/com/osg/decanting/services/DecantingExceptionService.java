package com.osg.decanting.services;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.osg.decanting.model.DecantingException;
import com.osg.decanting.model.DecantingExceptionList;
import com.redprairie.moca.MocaException;
import com.redprairie.moca.MocaResults;
import com.redprairie.moca.client.ConnectionUtils;
import com.redprairie.moca.client.MocaConnection;

@Service
public class DecantingExceptionService implements DecantingExceptionInterface{

	@Value("${byurl}")
	private String byurl;
	
	@Override
	public String findAll(String reagrp, String username, String password) throws IOException {
		MocaConnection conn = null;
		ArrayList<DecantingException> responseArray = new ArrayList<DecantingException>();
		DecantingExceptionList exceptionList = new DecantingExceptionList();
		String jsonString ="";
		Gson gson = new Gson();
		
		try {
			conn = establishMocaConnection(username, password);
			MocaResults res = conn.executeCommand("list reason code groups where reagrp = '" + reagrp + "'");
			 while(res.next()) { 
				 DecantingException responseRow = new DecantingException();
				 responseRow.setReacod(res.getString("reacod"));
				 responseRow.setReacod_dsc(res.getString("reacod_dsc"));	
				 responseArray.add(responseRow);
			 }
			 exceptionList.setDecantingExceptionList(responseArray);
			 jsonString = gson.toJson(exceptionList);
			 
			
		}catch (MocaException e) {
			e.printStackTrace();
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			if (conn != null)
				conn.close();
		}
		return jsonString;
	}
	
	public MocaConnection establishMocaConnection(String username, String password) {
		MocaConnection conn = null;
		try {
			conn = ConnectionUtils.createConnection(byurl, null);
			ConnectionUtils.login(conn, username, password);
		} catch (MocaException e) {
			int errorCode = e.getErrorCode();
			String errorMessage = e.getMessage();
			e.printStackTrace();
		}

		return conn;
	}

}
