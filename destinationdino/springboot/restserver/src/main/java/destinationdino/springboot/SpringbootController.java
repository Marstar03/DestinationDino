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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:5173")
public class SpringbootController {

    private final DestinationService destinationService;
    private final UserService userService;
    private final HasVisitedService hasVisitedService;

    @Autowired
    public SpringbootController(DestinationService destinationService, UserService userService,
            HasVisitedService hasVisitedService) {
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
    public Boolean createDestination(@RequestBody Destination destination) {
        destinationService.createDestination(destination);
        return true;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/signup")
    public Boolean signupNewUser(@RequestBody User user) {
        System.out.println("yay");
        return userService.signupNewUser(user.getUsername(), user.getPassword(), user.getEmail(), 0);
    }

    @GetMapping("/login")
    public Boolean getLoginValidation(@RequestParam String username, @RequestParam String password) {
        System.out.println("Yippy");
        return userService.validateLogin(username, password);
    }

    @GetMapping("/currentUser")
    public User getCurrentUser() {
        return userService.getCurrentUser();
    }

    @GetMapping("/logout")
    public Boolean logoutUser() {
        System.out.println("Logged out");
        return userService.removeCurrentUser();
    }

    @RequestMapping("/deleteAllDestinations")
    public ResponseEntity<String> wipeDatabase() {
        return destinationService.deleteAll();
    }

}
