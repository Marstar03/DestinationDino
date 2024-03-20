package destinationdino.springboot;

import java.util.List;
import java.util.Optional;

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
    public Boolean removeHasVisited(HasVisited hasVisited) {
        hasVisitedRepository.delete(hasVisited);
        return true;
    }

    @Transactional
    public ResponseEntity<String> deleteAll() {
        hasVisitedRepository.deleteAll();
        return ResponseEntity.ok("Database wiped successfully");
    }

    public Boolean checkIfHasVisited(String destinationName, String username) {
        Optional<HasVisited> result = hasVisitedRepository.findById(new HasVisitedId(username, destinationName));
        return result.isPresent();
    }

    /*
     * @Transactional
     * public void updateReview(String username, String destinationName, int rating,
     * String review) {
     * hasVisitedRepository.findById(username, destinationName);
     * }
     */

}
