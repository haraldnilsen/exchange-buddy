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
		
		for(Roompost param : allPosts) {
			
			// Case: skal ikke sjekke param, bare legge til
<<<<<<< HEAD
			boolean termEmpty = param.getTerm().equals(term);
			boolean cityEmpty = param.getCity().equals(city);
			boolean countryEmpty = param.getCountry().equals("null");
=======
			boolean termEmpty = term.equals("");
			boolean cityEmpty = city.equals("");
			boolean countryEmpty = country.equals("");
>>>>>>> refs/remotes/origin/master
			// boolean isActive = active;
			boolean roomatesEmpty = roomates.equals("");
			
			/*
			 * VIKTIG
			 * 
			 * de parameterene fra frontend som skal være lik "" er ikke lik "",
			 * og de er heller ikke lik null
			 */
			
			if(termEmpty && cityEmpty && countryEmpty && roomatesEmpty && active) {
				filteredPosts.add(param);
			}
			
		}
		
		return filteredPosts;
	}
	
}
