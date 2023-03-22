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
	
	public List <Roompost> findActiveByParameters (Integer minPrice, Integer maxPrice,
			String city, String term){
		List <Roompost> allPosts = roompostRepo.findAll();
		List <Roompost> sorted = allPosts.stream()
		.filter(x -> 
		x.getPrice() >= minPrice &&
		x.getPrice() <= maxPrice &&
		x.getCity().equals(city) &&
		x.getTerm().equals(term) &&
		x.isActive())
		.toList();
		
		return sorted;
	}
	
	
	/**
	 * stores a new roompost to the database
	 * 
	 * @param all roompost params
	 * @return list of right posts
	 */
	
	public Roompost newRoompost(String term, String city, String country, boolean active,
			Integer roommates, String bio, boolean wifi, boolean appliances, Integer price) {
		
		Roompost send = new Roompost(term, city, country, active, roommates, bio, wifi, appliances, price);
		roompostRepo.save(send);
		
		return send;
		
	}
	
}
