package exchange.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;
import exchange.student.service.UserrService;



@Controller
public class LoginController {

	@Autowired
	UserrService userService;
	
	@GetMapping
	public String getLogin() {
		return "Login";
	}
	
	@PostMapping
	public String loginUser(String mobilnr, String salt, String passord) {
		Userr user = userService.getUserr(mobilnr);
		
		
	}
	
	
}
