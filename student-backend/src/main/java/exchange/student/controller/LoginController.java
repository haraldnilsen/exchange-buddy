package exchange.student.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import exchange.student.entity.Userr;
import exchange.student.service.UserrService;
import exchange.student.util.LoginLogoutUtil;


@RestController
@RequestMapping("/api")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST},
		allowedHeaders = {"Content-Type", "Authorization"}
		)

public class LoginController {

	@Autowired
	UserrService userService;
	
	private String response = "";
	
	@GetMapping("response2")
	public String response2() {
		return response;
	}
	
	@PostMapping("login")
	public String loginUser(String mobilnr, String salt, String passord) {
		Userr user = userService.getUserr(mobilnr);
		if(LoginLogoutUtil.isUserValid(user, passord, mobilnr) == true) {
			
			return "redirect:/successPage"; // Replace "successPage" with the correct page to redirect to upon successful login
		}
		else {
	        model.addAttribute("errorMessage", "Invalid mobile number or password");
	        return "Login";
	    }
	}
	
	
}
