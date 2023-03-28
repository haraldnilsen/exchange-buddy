package exchange.student.service;

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
		
		allPosts.forEach(param -> {
			
			if(param.getTerm().equals(term) || param.getTerm().equals("")) {
				allPosts.add(param);
			}
				
			if(param.getCity().equals(city) || param.getCity().equals("")) {
				allPosts.add(param);
			}
				
			if(param.getCountry().equals(country) || param.getCountry().equals("")) {
				allPosts.add(param);
			} 
			
			if(param.isActive() == active || param.isActive() == true) {
				allPosts.add(param);
			}
			
			if(param.getRoomates().equals(roomates) || param.getRoomates().equals("")) {
				allPosts.add(param);
			}
			
		});
		
		return allPosts;
	}
	
}
