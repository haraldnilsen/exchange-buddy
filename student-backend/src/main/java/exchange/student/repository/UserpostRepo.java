package exchange.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import exchange.student.entity.Userrpost;

public interface UserpostRepo extends JpaRepository<Userrpost, Integer> {

	Userrpost findByUpostid(int upostid);

}
