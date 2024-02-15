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

    @PostMapping("/destinations")
    public Destination createDestination(@RequestBody Destination destination) {
        return destinationService.createDestination(destination);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/hasVisited")
    public List<User> getAllHasVisited() {
        return userService.getAllUsers();
    }

    @PostMapping("/hasVisited")
    public HasVisited createHasVisited(@RequestBody HasVisited hasVisited) {
        return hasVisitedService.createHasVisited(hasVisited);
    }


    @RequestMapping("/destinations")
    public ResponseEntity<String> wipeDatabase() {
        return destinationService.deleteAll();
    }

} 
