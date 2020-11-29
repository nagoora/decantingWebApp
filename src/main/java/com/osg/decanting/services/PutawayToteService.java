package com.osg.decanting.services;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.osg.decanting.model.PutawayTote;
import com.osg.decanting.model.PutawayToteList;
import com.redprairie.moca.MocaException;
import com.redprairie.moca.MocaResults;
import com.redprairie.moca.client.ConnectionUtils;
import com.redprairie.moca.client.MocaConnection;

@Service
public class PutawayToteService implements PutawayToteInterface {

	@Value("${byurl}")
	private String byurl;

	@Override
	public String findAll(String wh_id) throws IOException {
		MocaConnection conn = null;
		ArrayList<PutawayTote> responseArray = new ArrayList<PutawayTote>();
		PutawayToteList plt = new PutawayToteList();
		String jsonString ="";
		Gson gson = new Gson();
		try {
			conn = establishMocaConnection();
			MocaResults res = conn.executeCommand("tosg list putaway totes where wh_id = '" + wh_id + "'");

			 while(res.next()) { 
				 PutawayTote responseRow = new PutawayTote();
				 responseRow.setAsset_typ(res.getString("asset_typ"));
				 responseRow.setAsset_cat(res.getString("asset_cat"));
				 responseRow.setAsset_len(res.getString("asset_len"));
				 responseRow.setAsset_wid(res.getString("asset_wid"));
				 responseRow.setAsset_hgt(res.getString("asset_hgt"));
				 responseRow.setAsset_wgt(res.getString("asset_wgt"));
				 responseRow.setMax_wgt(res.getString("max_wgt"));
				 responseRow.setMax_vol(res.getString("max_vol"));
				 responseRow.setLngdsc(res.getString("lngdsc"));
				 responseArray.add(responseRow); 
			 }
			 plt.setPutawayTote(responseArray);
		         jsonString = gson.toJson(plt);
			 
		} catch (MocaException e) {
			e.printStackTrace();
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			if (conn != null)
				conn.close();
		}
		return jsonString;
	}

	public MocaConnection establishMocaConnection() {
		MocaConnection conn = null;
		try {
			conn = ConnectionUtils.createConnection(byurl, null);
			ConnectionUtils.login(conn, "anagoor", "Crate123");
		} catch (MocaException e) {
			int errorCode = e.getErrorCode();
			String errorMessage = e.getMessage();
			e.printStackTrace();
		}

		return conn;
	}

}
