package exchange.student.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;


/**
 * 
 * @author Dennis Osmani
 *
 */


@Service
public class UserrService {

	
	private @Autowired UserrRepo urepo;
	
	/**
	 * Register a new user and save the userinfo in the database
	 * @param mobile
	 * @param fname
	 * @param lname
	 * @param fdate
	 * @param profilepic
	 * @param sex
	 * @param salt
	 * @param password
	 * @return
	 */
	
	public Userr RegisterUserr(String mobile, String fname, String lname, Date fdate, 
			String profilepic, String sex, String salt, String password) {
		
		Userr user = new Userr(mobile, fname, lname, fdate, profilepic, sex, salt, password);
		urepo.save(user);
		
		return user;
		
	}
	
	/**
	 * Find the user in the database by using the Primary Key
	 * @param mobile
	 * @return
	 */
	
	public Userr getUserr(String mobile) {
		return urepo.findByMobile(mobile);
	}
	
}
