package destinationdino.springboot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SpringbootController {
    
    private final DestinationService destinationService;

    @Autowired
    public SpringbootController(DestinationService destinationService) {
        this.destinationService = destinationService;
    }
    

    @GetMapping("/destinations")
    public List<Destination> getAllDestinations() {
        return destinationService.getAllDestinations();
    }

    @PostMapping("/destinations")
    public Destination createDestination(@RequestBody Destination destination) {
        return destinationService.createDestination(destination);
    }

    @RequestMapping("/destinations")
    public ResponseEntity<String> wipeDatabase() {
        return destinationService.deleteAll();
    }




} 
