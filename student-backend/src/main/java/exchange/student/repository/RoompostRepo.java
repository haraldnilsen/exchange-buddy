package exchange.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import exchange.student.entity.Roompost;

public interface RoompostRepo extends JpaRepository<Roompost, Integer> {

	Roompost findByRpostid(int rpostid);
}
