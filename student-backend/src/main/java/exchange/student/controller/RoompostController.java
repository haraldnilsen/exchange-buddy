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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import exchange.student.entity.Roompost;
import exchange.student.entity.RoompostFromFrontend;
import exchange.student.repository.RoompostRepo;
import exchange.student.service.RoompostService;

@RestController
@RequestMapping("/api/roompost")
@CrossOrigin(
		origins = "http://localhost:3000",
		methods = {RequestMethod.GET, RequestMethod.POST},
		allowedHeaders = {"Content-Type", "Authorization"}
		)

public class RoompostController {
	
	@Autowired private RoompostService roompostService;
	@Autowired private RoompostRepo roompostRepo;
	
	@GetMapping("all")
	public List <Roompost> getAllRoomposts(){
		return roompostRepo.findAll();
	}
	
	@PostMapping("filter")
	public List<Roompost> getFilteredRoomposts(@RequestBody Roompost roompost) {
		
		List<Roompost> filter = roompostService.filterByParameters(roompost.getTerm(), roompost.getCity(), 
					roompost.getCountry(), roompost.isActive(), roompost.getRoomates());
		
		
		return filter;
	}
	
	@GetMapping("cities")
	public List<String> getCities() {
		return roompostRepo.findAll().stream().map(rp -> rp.getCity()).distinct().toList();
		
	}
	
	@GetMapping("countries")
	public List<String> getCountries() {
		return roompostRepo.findAll().stream().map(rp -> rp.getCountry()).distinct().toList();
	}
	
	@PostMapping("mypost")
	public Roompost getRoompostByMobile(@RequestParam String mobile) {
		return roompostRepo.findByMobile(mobile);
	}
	
	
	
	
	
	
	
	
	
	
	
	@PostMapping("roompost")
	public Roompost createRoompost(@RequestBody Roompost roompost) {
		return roompostService.newRoompost(roompost);
	}
	
	@GetMapping("{rpostid}")
	public ResponseEntity<Roompost> getRoompostById(@PathVariable int id) {
		Roompost rpost = roompostRepo.findByRpostid(id);
		
		return ResponseEntity.ok(rpost);
	}
	
	@PutMapping("{rpostid}")
	public ResponseEntity<Roompost> updateRoomPost(@PathVariable int id, @RequestBody Roompost roompost){
		Roompost rpost = roompostRepo.findByRpostid(id);
		
		rpost.setActive(roompost.isActive());
		rpost.setAppliances(roompost.isAppliances());
		rpost.setBio(roompost.getBio());
		rpost.setCity(roompost.getCity());
		rpost.setCountry(roompost.getCountry());
		rpost.setPrice(roompost.getPrice());
		rpost.setRoomates(roompost.getRoomates());
		rpost.setTerm(roompost.getTerm());
		rpost.setWifi(roompost.isWifi());
		rpost.setKvm(roompost.getKvm());
		rpost.setPicture(roompost.getPicture());
	
		roompostRepo.save(rpost);
		
		return ResponseEntity.ok(rpost);
	}

}
