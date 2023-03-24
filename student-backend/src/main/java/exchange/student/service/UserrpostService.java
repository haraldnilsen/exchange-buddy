package exchange.student.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exchange.student.entity.Userrpost;
import exchange.student.repository.UserpostRepo;

/**
 * 
 * @author Burgerking
 */

@Service
public class UserrpostService {

	private @Autowired UserpostRepo userpostRepo;
	
	/**
	 * finds the userposts that match with the given paramters
	 * 
	 * @param price, term, city
	 * @return list of right posts
	 */
	
	public List <Userrpost> findActiveByParameters (Integer price, String term, String city) {
		List<Userrpost> allPosts = userpostRepo.findAll();
		List<Userrpost> sorted = allPosts.stream().
		filter(x -> 
		x.getMaxPrice() >= price && 
		x.getMinPrice() <= price &&
		x.getCity().equals(city) &&
		x.getTerm().equals(term) &&
		x.isActive())
		.toList();
		
		return sorted;
	}
	
	/**
	 * stores a new userpost to the database
	 * 
	 * @param a userpost object
	 * @return the userpost object
	 * 
	 */
	
	public Userrpost newUserrpost(Userrpost post) {
		
		userpostRepo.save(post);
		
		return post;
	}
	
	
	
}
