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

@RestController
@RequestMapping("/api")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST},
		allowedHeaders = {"Content-Type", "Authorization"}
		)
public class RegisterController {
	
	@Autowired UserrRepo userRepo;

	@PostMapping("student")
	public ResponseEntity<Userr> postStudent(@RequestBody Userr user) {
		/*
		 * HER MÅ DET FIKSES
		 *  - user.passord må hashes med salt
		 *  - user.passord må oppdateres
		 *  - user.salt må oppdateres
		 */
		
		// userRepo.save(user);
		return null;
	}
	
}
