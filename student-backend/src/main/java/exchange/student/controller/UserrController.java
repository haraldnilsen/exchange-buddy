package exchange.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import exchange.student.entity.Userr;
import exchange.student.service.UserrService;
import exchange.student.util.PasswordHashAndSalt;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT},
		allowedHeaders = {"Content-Type", "Authorization"}
		)
public class UserrController {

	@Autowired private UserrService userService;
	
	@PutMapping("{mobile}")
	public ResponseEntity <Userr> updateUser(@PathVariable String mobile, @RequestBody Userr userDetails) {
		Userr updatedUser = userService.getUserr(mobile);
		
		updatedUser.setFdate(userDetails.getFdate());
		updatedUser.setFname(userDetails.getFname());
		updatedUser.setLname(userDetails.getLname());
		String nySalt = PasswordHashAndSalt.genererTilfeldigSalt();
		String nyPass = PasswordHashAndSalt.hashMedSalt(userDetails.getPassword(), nySalt);
		updatedUser.setPassword(nyPass);
		updatedUser.setSalt(nySalt);
		updatedUser.setProfilepic(updatedUser.getProfilepic());
		updatedUser.setSex(userDetails.getSex());
		
		userService.saveUserr(updatedUser);
		
		return ResponseEntity.ok(updatedUser);
		
	}
	
}
