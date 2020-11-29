package com.osg.decanting;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.redprairie.moca.MocaException;

@CrossOrigin(origins = {"http://localhost:3000"})
@Controller
public class DecantingWebAppController {

	@Value("${byurl}")
	private String byurl;
	
		@RequestMapping(value={"", "/", "wh_id"})
		public String react(@RequestParam(name="wh_id") String wh_id, HttpServletRequest request) throws MocaException {
			request.getSession().setAttribute("wh_id", wh_id);
			return "index.html";
		}
		
}
