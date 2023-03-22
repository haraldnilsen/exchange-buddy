package exchange.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import exchange.student.model.Teststudent;

public interface TeststudentRepo extends JpaRepository<Teststudent, Integer> {

	Teststudent findBySid(Integer sid);
	
}
