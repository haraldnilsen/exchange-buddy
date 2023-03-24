package exchange.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;
import exchange.student.service.UserrService;

@RestController
@RequestMapping("/api")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST},
		allowedHeaders = {"Content-Type", "Authorization"}
		)
public class RegisterController {
	
	@Autowired UserrService userService;

	@PostMapping("user")
	public /*ResponseEntity<Userr>*/ void postStudent(@RequestBody Userr user) {
		
		userService.RegisterUserr(user);
		
	}
	
}
