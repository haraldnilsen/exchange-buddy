package exchange.student.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;
import exchange.student.util.PasswordHashAndSalt;


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
		
	public Userr RegisterUserr(Userr user) {
		
		String salt = PasswordHashAndSalt.genererTilfeldigSalt();
		String password = PasswordHashAndSalt.hashMedSalt(user.getPassword(), salt);
		
		user.setPassword(password);
		user.setSalt(salt);
		
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
	
	public void saveUserr(Userr user) {
		urepo.save(user);
	}
	
}
