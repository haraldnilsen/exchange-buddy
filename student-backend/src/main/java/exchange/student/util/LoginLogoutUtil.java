package exchange.student.util;

public class LoginLogoutUtil {

	/**
	 * @author Dennis Osmani
	 * 
	 * makes sure the username is the user wants to use to login in is valid
	 */
	
	public static final String MAX_8_DIGIT = "[8]";

	
    public static boolean isValidMobil(String mobil) {
    	return mobil != null && mobil.matches("^" + MAX_8_DIGIT + "$");
    }
}
