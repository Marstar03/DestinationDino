package destinationdino.springboot;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HasVisitedRepository extends JpaRepository<HasVisited, HasVisitedId> {

}
