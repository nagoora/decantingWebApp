package com.osg.decanting.controller;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.osg.decanting.model.DecantingMove;
import com.osg.decanting.services.DecantingExceptionInterface;
import com.osg.decanting.services.PutawayToteInterface;
import com.redprairie.moca.MocaException;
import com.redprairie.moca.MocaResults;
import com.redprairie.moca.client.ConnectionUtils;
import com.redprairie.moca.client.MocaConnection;

import net.minidev.json.JSONObject;

@RestController
@RequestMapping("/decanting")
public class ValidationController {
	
	@Value("${byurl}")
	private String byurl;
	
	@Autowired
	private PutawayToteInterface putawayToteInterface;	
	
	@Autowired
	private DecantingExceptionInterface decantingExceptionInterface;
	
	@GetMapping("/ws/cws/tosgGetInventoryIdentifierDetails")
	public JSONObject tosgGetInventoryIdentifierDetails(@RequestParam(name="srclpn") String srclpn, HttpServletRequest request, @RequestHeader MultiValueMap<String, String> headers)throws MocaException {
		MocaConnection conn = null;
		JSONObject response = new JSONObject();
		try {
			conn = establishMocaConnection(headers.getFirst("username"), headers.getFirst("password"));
			 System.out.println("Warehouse ID for this sesion is " + request.getAttribute("wh_id"));
			 MocaResults res = conn.executeCommand("get tosg inventory identifier details where id = '" + srclpn + "'");
			 while (res.next()) {
				 JSONObject responseRow = new JSONObject();
				 responseRow.put("lodnum", res.getString("lodnum"));
				 responseRow.put("wh_id", res.getString("wh_id"));
                // Do something with these.
				 response.put("response", responseRow);
			 
            }
		} catch (MocaException e) {
            e.printStackTrace();
        }
        finally {
            if (conn != null) conn.close();
        }
		return response;
	}
	
	@GetMapping("/ws/cws/tosgGetItemQtyOnLodnum")
	public JSONObject tosgGetItemQtyOnLodnum(@RequestParam(name="lodnum") String lodnum, 
			@RequestParam(name="prtnum") String prtnum,
			@RequestParam(name="wh_id") String wh_id,
			@RequestHeader MultiValueMap<String, String> headers)throws MocaException {
		MocaConnection conn = null;
		JSONObject response = new JSONObject();
		try {
			conn = establishMocaConnection(headers.getFirst("username"), headers.getFirst("password"));
			 MocaResults res = conn.executeCommand("tosg get decanting item data where lodnum = '" + lodnum + "' and prtnum ='" + prtnum + "' and wh_id ='" + wh_id + "'");
			 while (res.next()) {
				 JSONObject responseRow = new JSONObject();
				 HashMap<String, String> toteMaxDetails = getToteAndMaxUnits(res.getString("tote"), wh_id, res.getString("prtnum"), conn);
				 
				 responseRow.put("prtnum", res.getString("prtnum"));
				 responseRow.put("lodnum", res.getString("lodnum"));
				 responseRow.put("total_units", res.getString("total_units"));
				 responseRow.put("item_description", res.getString("item_description"));
				 responseRow.put("untcas", res.getInt("untcas"));
				 responseRow.put("prt_client_id", res.getString("prt_client_id"));
				 responseRow.put("wh_id", res.getString("wh_id"));
				 responseRow.put("data", res.getString("data"));
				 responseRow.put("file_typ", res.getString("file_typ"));
				 responseRow.put("img_src", res.getString("img_src"));
				 responseRow.put("movement_zone", res.getString("movement_zone"));
				 responseRow.put("asset_typ",res.getString("tote"));
				 responseRow.put("tote",toteMaxDetails.get("asset_typ_description"));
				 responseRow.put("suggested_max_units", toteMaxDetails.get("suggested_max_units"));
				 responseRow.put("asset_wgt", toteMaxDetails.get("asset_wgt"));
				 responseRow.put("wrapping_type", "Some Wrapping Type");
				 responseRow.put("decanting_instructions", "Decanting demo instructions will be fetched by item");
				 responseRow.put("special_instructions", "Decanting Special Instructions here");
				 response.put("response", responseRow);
            }
			 

			
		} catch (MocaException e) {
            e.printStackTrace();
        }catch(Exception ex) {
        	ex.printStackTrace();
        }
        finally {
            if (conn != null) conn.close();
        }
		return response;
	}
	
	public HashMap<String, String> getToteAndMaxUnits(String tote, String whId, String prtnum, MocaConnection conn){
		HashMap<String, String> response = new  HashMap<String, String>();
		
		try {
			 MocaResults res = conn.executeCommand("tosg get asset suggested max units where asset_typ = '" + tote + "' and prtnum ='" + prtnum + "' and wh_id ='" + whId + "'");
			 while (res.next()) {
				 response.put("prtnum", res.getString("prtnum"));
				 response.put("asset_typ_description", res.getString("asset_typ_description"));
				 response.put("suggested_max_units", res.getString("suggested_max_units").split("\\.")[0]);
				 response.put("asset_max_vol", res.getString("asset_max_vol"));
				 response.put("asset_wgt", res.getString("asset_wgt"));
            }
			
		} catch (MocaException e) {
            e.printStackTrace();
        }catch(Exception ex) {
        	ex.printStackTrace();
        }
		
		return response;
	}
	
	
	@RequestMapping(value = "/ws/cws/tosgListPutawayTotes", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE )
	public @ResponseBody  String tosgListPutawayTotes(@RequestParam(name="wh_id") String wh_id, @RequestHeader MultiValueMap<String, String> headers)throws MocaException, IOException {

		String putawayToteList = putawayToteInterface.findAll(wh_id,headers.getFirst("username"), headers.getFirst("password"));
		return putawayToteList;
	}
	
	 
	 @PostMapping("/moveInventory")
		public @ResponseBody  String moveInventory(@RequestBody DecantingMove decantingMove, HttpServletRequest request)throws MocaException, IOException {
		 	String jsonString ="";
		 	Gson gson = new Gson();
		 	 MocaConnection conn =null;
		 	 try {
		 		 conn = establishMocaConnection(request.getHeader("username"), request.getHeader("password"));
		 		 String command = "tosg decanting item move inventory where lodnum = '" + decantingMove.getLodnum() + "' and prtnum ='" + decantingMove.getItem() + "' and wh_id ='" + decantingMove.getWarehouseId() + "' and untqty ='" + decantingMove.getSuggestedToteMax() +  "' and dstlod='" + decantingMove.getDestinationLpn() +"'";
			 	 MocaResults res = conn.executeCommand(command);
		 	 }catch (MocaException e) {
		            String errorMessage = e.getMessage();
		            return errorMessage;
		        }catch(Exception ex) {
		        	ex.printStackTrace();
		        	return "Error";
		        }
		        finally {
		            if (conn != null) conn.close();
		        }
		 	
		 	System.out.println("request " + jsonString);
		 	return "success";
		 
		}
	 
	 @RequestMapping(value={"/ws/auth/login"})
		public String loginDefault(@RequestParam(name="usr_id") String userName, @RequestParam(name="password") String password) throws MocaException {
			MocaConnection conn = establishMocaConnection(userName, password);
			Gson gson = new Gson(); 
			String connectionEnvironmentVariables = gson.toJson(conn.getEnvironment()); 
			return connectionEnvironmentVariables;
	}
	 
	 @RequestMapping(value = "/ws/cws/tosgGetDecantingExceptionList", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE )
		public @ResponseBody  String tosgGetDecantingExceptionList(@RequestParam(name="reagrp") String reagrp, @RequestHeader MultiValueMap<String, String> headers)throws MocaException, IOException {

			String decantingExceptionList = decantingExceptionInterface.findAll(reagrp,headers.getFirst("username"), headers.getFirst("password"));
			return decantingExceptionList;
		}
		
		 public MocaConnection establishMocaConnection(String userName, String password){
		        MocaConnection conn =null;
		        try{
		            conn = ConnectionUtils.createConnection(byurl, null);
		            ConnectionUtils.login(conn, userName, password);
		        }catch(MocaException e){
		            int errorCode = e.getErrorCode();
		            String errorMessage = e.getMessage();
		            e.printStackTrace();
		        }

		        return conn;
		    }

}
