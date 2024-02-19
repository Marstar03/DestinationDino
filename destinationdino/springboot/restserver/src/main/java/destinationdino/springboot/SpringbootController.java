package destinationdino.springboot;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:5173")
public class SpringbootController {
    
    private final DestinationService destinationService;
    private final UserService userService;
    private final HasVisitedService hasVisitedService; 

    @Autowired
    public SpringbootController(DestinationService destinationService, UserService userService, HasVisitedService hasVisitedService) {
        this.destinationService = destinationService;
        this.userService = userService;
        this.hasVisitedService = hasVisitedService;
    }
    

    @GetMapping("/destinations")
    public List<Destination> getAllDestinations() {
        List<Destination> result = destinationService.getAllDestinations();
        return result;
    }

    @GetMapping("/destinationInfo")
    public Destination getSpecificDestination(@RequestBody String id) {
        Optional<Destination> specificDestination = destinationService.getDestinationByID(id);
        if (specificDestination.isEmpty()) {
            return null;  
        }
        return specificDestination.get();
    }

    @PostMapping("/addDestination")
    public Destination createDestination(@RequestBody Destination destination) {
        return destinationService.createDestination(destination);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/login")
    public void createUserIfNew(@RequestBody User user) {
        Optional<User> userById = userService.getUserByID(user.getUsername()); 
        if (userById.isEmpty()) {
            userService.createUser(user);
        }
    }

    @RequestMapping("/deleteAllDestinations")
    public ResponseEntity<String> wipeDatabase() {
        return destinationService.deleteAll();
    }

} 
