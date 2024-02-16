package destinationdino.springboot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class HasVisitedService {

    private final HasVisitedRepository hasVisitedRepository;

    @Autowired
    public HasVisitedService(HasVisitedRepository hasVisitedRepository) {
        this.hasVisitedRepository = hasVisitedRepository;
    }

    public List<HasVisited> getAllHasVisiteds() {
        return hasVisitedRepository.findAll();
    }

    @Transactional
    public HasVisited createHasVisited(HasVisited hasVisited) {
        return hasVisitedRepository.save(hasVisited);
    }

    @Transactional
    public ResponseEntity<String> deleteAll() {
        hasVisitedRepository.deleteAll();
        return ResponseEntity.ok("Database wiped successfully");
    }

}
