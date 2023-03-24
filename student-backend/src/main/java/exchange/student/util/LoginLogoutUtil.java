package exchange.student.util;

import javax.servlet.http.HttpSession;

import exchange.student.entity.Userr;

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
    
    public static boolean isUserValid(Userr p, String password, ) {
    	if(p == null || p.getMobile())
    }
}
