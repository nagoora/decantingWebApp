package com.osg.decanting;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.redprairie.moca.MocaException;


@Controller
public class DecantingWebAppController {

	@Value("${byurl}")
	private String byurl;
	
		@RequestMapping(value={"", "/", "/Decanting","/Signin", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}" })
		public String react(HttpServletRequest request) throws MocaException {
			return "index.html";
	}
		

}
