package exchange.student.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class TeststudentController {

	@GetMapping
	public String getMap() {
		return "";
	}
	
	@PostMapping
	public String postMap() {
		return "";
	}
	
}
