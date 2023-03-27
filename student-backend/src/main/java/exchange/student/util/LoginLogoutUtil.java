package exchange.student.util;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

import exchange.student.entity.Userr;
import exchange.student.service.UserrService;

public class LoginLogoutUtil {

	/**
	 * @author Dennis Osmani
	 * 
	 * makes sure the username is the user wants to use to login in is valid
	 */
	
	public static final String MAX_8_DIGIT = "[0-9]{8}$";

	
    public static boolean isValidMobile(String mobile) {
    	return mobile != null && mobile.matches("^" + MAX_8_DIGIT + "$");
    }
    
    public static void loggUtBruker(HttpSession session) {
		session.invalidate();
	}
    
    public static boolean erBrukerInnlogget(HttpSession session) {
		return session != null;
	}
    
    public static boolean isUserValid(Userr userDB, String mobile, String password) {
    	
    	if(userDB == null)
    		return false;
    	
    	if(!isValidMobile(mobile)
    		
    	(!userDB.getMobile().matches(mobile) || !PasswordHashAndSalt.validerMedSalt(password, userDB.getSalt(), userDB.getPassword()))
    		
    		return false;
    	
    	
    	return true;
    	
    }
    
    
    
}
