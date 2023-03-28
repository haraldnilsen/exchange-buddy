package exchange.student.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exchange.student.entity.Roompost;
import exchange.student.repository.RoompostRepo;

/**
 * 
 * @author BurgerKing
 *
 */

@Service
public class RoompostService {

	private @Autowired RoompostRepo roompostRepo;
	
	/**
	 * finds the roomposts that match with the given paramters
	 * 
	 * @param minprice, maxprice, term, city
	 * @return list of right posts
	 */
	
	public List <Roompost> findActiveByParameters(String minPrice, String maxPrice,
			String city, String term){
		List <Roompost> allPosts = roompostRepo.findAll();
		List <Roompost> sorted = allPosts.stream()
		.filter(x -> 
		x.getPrice().compareTo(minPrice) >= 0 &&
		x.getPrice().compareTo(maxPrice) <= 0 &&
		x.getCity().equals(city) &&
		x.getTerm().equals(term) &&
		x.isActive())
		.toList();
		
		return sorted;
	}
	
	
	/**
	 * stores a new roompost to the database
	 * 
	 * @param A roompost object
	 * @return list of right posts
	 */
	
	public Roompost newRoompost(Roompost roompost) {
		
		roompostRepo.save(roompost);
		
		return roompost;
		
	}
	
	public List<Roompost> filterByParameters(String term, String city, String country, 
							boolean active, String roomates) {
		
		List<Roompost> allPosts = roompostRepo.findAll();
		List<Roompost> filteredPosts = new ArrayList<>();
		boolean Vterm = false;
		boolean Vcity = false;
		boolean Vcountry = false;
		boolean Vactive = false;
		boolean Vroomates = false;
		
		for(Roompost param : allPosts) {
			
			/*
			 * Mooooordi
			 */
			
			System.err.println(param.getCountry());
			System.err.println(param.getTerm());
			
			if(param.getTerm().equals(term) || param.getTerm().equals("")) {
				// filteredPosts.add(param);
				Vterm = true;
				System.err.println("1");
			}
				
			if(param.getCity().equals(city) || param.getCity().equals("")) {
				// filteredPosts.add(param);
				Vcity = true;
				System.err.println("2");
			}
				
			if(param.getCountry().equals(country) || param.getCountry().equals("")) {
				// filteredPosts.add(param);
				Vcountry = true;
				System.err.println("3");
			} 
			
			if(param.isActive() == true) {
				// filteredPosts.add(param);
				Vactive = true;
				System.err.println("4");
			}
			
			if(param.getRoomates().equals(roomates) || param.getRoomates().equals("")) {
				// filteredPosts.add(param);
				Vroomates = true;
				System.err.println("5");
			}
			
			if(Vterm && Vcity && Vcountry && Vactive && Vroomates) {
				filteredPosts.add(param);
			}
			
		}
		
		return filteredPosts;
	}
	
}
