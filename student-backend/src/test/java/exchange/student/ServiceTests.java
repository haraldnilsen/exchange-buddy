package exchange.student;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;

import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;
import exchange.student.service.UserrService;

public class ServiceTests {

	// TEST DATA
	@Autowired UserrRepo urepo;
	@Autowired UserrService uservice;
	private Userr user1;
	
	@BeforeEach()
	public void setup() {
				
		user1 = uservice.RegisterUserr("12345678", "Petter", "Pilgaard", "20.12.1969", "mordiNaken", "Mann", "Vendela");
		urepo.save(user1);
	}
	
	
	@Test
	public void findUserrByMobile() {
		System.out.println("Test av userr fra databasen");
		
		assertEquals("123456789", uservice.getUserr(user1.getMobile()));
	}
	
}
