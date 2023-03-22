package exchange.student;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import exchange.student.entity.Userr;
import exchange.student.repository.UserrRepo;

public class ServiceTests {

	// TEST DATA
	@Autowired UserrRepo urepo;
	private Userr user;
	
	@Test
	void findUserrByMobile(String mobile) {
		
	}
	
	
}
