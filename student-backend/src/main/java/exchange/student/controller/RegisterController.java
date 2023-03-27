package exchange.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;
import exchange.student.service.UserrService;
import exchange.student.util.RegexUtil;

@RestController
@RequestMapping("/api")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST},
		allowedHeaders = {"Content-Type", "Authorization"}
		)
public class RegisterController {
	
	@Autowired UserrService userService;
	
	private String response = "";
	
	@GetMapping("response") 
	public String responseMessage() {
		
		return response;
	}

	@PostMapping("user")
	public /*ResponseEntity<Userr>*/ void postStudent(@RequestBody Userr user) {
		
		Userr duplicateUser = userService.getUserr(user.getMobile());
		
		if (duplicateUser != null) {
			// User is not in database
			// TODO - response message - user exists
			response = "User already exixsts!";
		}
		
		boolean valid = RegexUtil.validateUser(user);
		
		System.err.println(valid);
		
		if(valid) {
			userService.RegisterUserr(user);
		} else {
			// TODO Response message - not valid input
			System.err.println("Invalid input");
			response="Invalid input";
		}
		
	}
	
}
