package exchange.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import exchange.student.entity.Userrpost;

@Repository
public interface UserpostRepo extends JpaRepository<Userrpost, Integer> {

	Userrpost findByUpostid(int upostid);

}
