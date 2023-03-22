package exchange.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import exchange.student.entity.Userpost;

public interface UserpostRepo extends JpaRepository<Userpost, Integer> {

	Userpost findByUpostid(int upostid);

}
