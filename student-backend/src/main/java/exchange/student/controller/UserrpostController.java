package exchange.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import exchange.student.entity.UserpostSearchEntity;
import exchange.student.entity.Userrpost;
import exchange.student.repository.UserpostRepo;
import exchange.student.service.UserrpostService;

@RestController
@RequestMapping("/api/userpost")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT},
		allowedHeaders = {"Content-Type", "Authorization"}
		)
public class UserrpostController {

	@Autowired private UserrpostService userrpostService;
	@Autowired private UserpostRepo userrpostRepo;
	
	
	@GetMapping("all")
	public List<Userrpost> getAllUserposts() {
		return userrpostRepo.findAll();
	}
	
	@PostMapping("filter")
	public List<Userrpost> getFilteredUserrposts(@RequestBody UserpostSearchEntity userrpost) {
		
		List<Userrpost> filter = userrpostService.filterByParameters(userrpost.getTerm(),
				userrpost.getCity(), userrpost.getCountry(), userrpost.getPricefrom(), userrpost.getPriceto());
		
		return filter;
	}
	
	
	@GetMapping("cities")
	public List<String> getCities() {
		return userrpostRepo.findAll().stream().map(rp -> rp.getCity()).distinct().toList();
		
	}
	
	@GetMapping("countries")
	public List<String> getCountries() {
		return userrpostRepo.findAll().stream().map(rp -> rp.getCountry()).distinct().toList();
	}
	

	
	
	
	
	
	@PostMapping
	public Userrpost createUserrpost(@RequestBody Userrpost userrpost) {
		return userrpostService.newUserrpost(userrpost);
	}
	
	@GetMapping("{upostid}")
	public ResponseEntity<Userrpost> getUserrpostById(@PathVariable int id) {
		Userrpost upost = userrpostRepo.findByUpostid(id);
		
		return ResponseEntity.ok(upost);
	}
	
	@PutMapping("{upostid}")
	public ResponseEntity<Userrpost> updateUserrPost(@PathVariable int id, @RequestBody Userrpost userrpost){
		Userrpost upost = userrpostRepo.findByUpostid(id);
		
		upost.setActive(userrpost.isActive());
		upost.setBio(userrpost.getBio());
		upost.setCity(userrpost.getCity());
		upost.setCountry(userrpost.getCountry());
		upost.setMinPrice(userrpost.getMinPrice());
		upost.setMaxPrice(userrpost.getMaxPrice());
		upost.setTerm(userrpost.getTerm());
		
		
		userrpostRepo.save(upost);
		
		return ResponseEntity.ok(upost);
	}
}
