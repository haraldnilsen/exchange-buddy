package exchange.student.service;

import java.util.List;

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
	
	public List <Userrpost> findByParam (int price, String term, String city) {
		List<Userrpost> liste = userpostRepo.findAll();
//		liste.stream().filter(x -> )
		return null;
	}
	
}
