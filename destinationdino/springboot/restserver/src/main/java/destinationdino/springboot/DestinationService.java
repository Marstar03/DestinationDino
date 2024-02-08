package destinationdino.springboot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class DestinationService {

    private final DestinationRepository destinationRepository;

    @Autowired
    public DestinationService(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    public List<Destination> getAllDestinations() {
        return destinationRepository.findAll();
    }

    @Transactional
    public Destination createDestination(Destination destination) {
        return destinationRepository.save(destination);
    }

    @Transactional
    public ResponseEntity<String> deleteAll() {
        destinationRepository.deleteAll();
        return ResponseEntity.ok("Database wiped successfully");
    }

}
