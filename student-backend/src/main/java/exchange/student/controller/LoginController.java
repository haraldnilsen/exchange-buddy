package exchange.student.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;
import exchange.student.service.UserrService;
import exchange.student.util.LoginLogoutUtil;



@Controller
@RequestMapping("/login")
public class LoginController {

	@Autowired
	UserrService userService;
	
	@GetMapping
	public String getLogin() {
		return "Login";
	}
	
	@PostMapping
	public String loginUser(String mobilnr, String salt, String passord, Model model, HttpSession session) {
		Userr user = userService.getUserr(mobilnr);
		if(LoginLogoutUtil.isUserValid(user, passord, mobilnr) == true) {
			session.setAttribute("user", user);
			return "redirect:/successPage"; // Replace "successPage" with the correct page to redirect to upon successful login
		}
		else {
	        model.addAttribute("errorMessage", "Invalid mobile number or password");
	        return "Login";
	    }
	}
	
	
}
