package exchange.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import exchange.student.entity.Userr;

public interface UserrRepo extends JpaRepository<Userr, String> {
	
	Userr findByMobile(String mobile);
	
	// flere evt + lage tester for service
}
