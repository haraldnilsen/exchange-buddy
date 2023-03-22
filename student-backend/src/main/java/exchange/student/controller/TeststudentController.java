package exchange.student.controller;

import java.util.List;

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

import exchange.student.model.Teststudent;
import exchange.student.repository.TeststudentRepo;

@RestController
@RequestMapping("api/")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST},
		allowedHeaders = {"Content-Type", "Authorization"}
		)
public class TeststudentController {

	@Autowired TeststudentRepo testRepo;


	@GetMapping("student")
	public List<Teststudent> getStud() {
		return this.testRepo.findAll();
	}

	@PostMapping("student")
	public ResponseEntity<Teststudent> postMap(@RequestBody Teststudent student) {
		
		// student.setStudentnr(Integer.parseInt(student.getStudentnr()));
		
		testRepo.save(student);
		
		return ResponseEntity.ok(student);
	}

}
