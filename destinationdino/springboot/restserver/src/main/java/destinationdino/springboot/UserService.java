package destinationdino.springboot;

import java.util.List;
import java.util.Optional;

import org.apache.el.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private User currentUser; 

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserByID(String id) {
        Optional<User> userById = userRepository.findById(id); 
        return userById; 
    }

    public boolean validateLogin(String username, String password) {
        Optional<User> userById = userRepository.findById(username); 
        if (userById.isEmpty()) {
            return false;
        }
        if (userById.get().getPassword().equals(password)) {
            currentUser = userById.get(); 
            return true;
        }
        return false;
    }

    public boolean signupNewUser(String username, String password, String email, int profilePicture) {

        if (userRepository.existsById(username)) {
            return false;
        }
        if (getAllUsers().stream().anyMatch(u -> u.getEmail().equals(email))) {
            return false;
        }
        User newUser = new User(username, password, email, profilePicture, false);
        this.createUser(newUser);
        currentUser = newUser;

        return true;
    }

    public User getCurrentUser() {
        return currentUser;
    }

    public boolean removeCurrentUser() {
        this.currentUser = null;
        return true;
    }

    @Transactional
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Transactional
    public ResponseEntity<String> deleteAll() {
        userRepository.deleteAll();
        return ResponseEntity.ok("Database wiped successfully");
    }

}
