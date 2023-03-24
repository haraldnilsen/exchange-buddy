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
	 * @param A roompost object
	 * @return list of right posts
	 */
	
	public Roompost newRoompost(Roompost roompost) {
		
		roompostRepo.save(roompost);
		
		return roompost;
		
	}
	
}
