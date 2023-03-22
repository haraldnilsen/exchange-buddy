package exchange.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exchange.student.model.Teststudent;
import exchange.student.repository.TeststudentRepo;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:3000")
public class TeststudentController {

	@Autowired TeststudentRepo testRepo;
	
	
	@GetMapping("student")
	public List<Teststudent> getStud() {
		return this.testRepo.findAll();
	}
	
	@GetMapping
	public String getMap() {
		return "";
	}
	
	@PostMapping
	public String postMap() {
		return "";
	}
	
}
