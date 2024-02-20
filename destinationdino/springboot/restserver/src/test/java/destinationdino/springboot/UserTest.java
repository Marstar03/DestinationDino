package destinationdino.springboot;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class UserTest {

    private void testSetup(String username, String password, String email, Integer profilePicture, boolean isAdmin, User user) {
        assertEquals(username, user.getUsername());
        assertEquals(password, user.getPassword());
        assertEquals(email, user.getEmail());
        assertEquals(profilePicture, user.getProfilePicture());
        assertEquals(isAdmin, user.isAdmin());
    }
    
    @Test
    @DisplayName("Geters and seters")
    public void getersAndSeters() {

        User user1 = new User();
        User user2 = new User();
        User user3 = new User();
        
        testSetup(null, null, null, null, false, user1);
        testSetup(null, null, null, null, false, user2);
        testSetup(null, null, null, null, false, user3);
        
        user1.setUsername("username1");
        user1.setPassword("password1");
        user1.setEmail("email1@mail.com");
        user1.setProfilePicture(3);

        user2.setUsername("username2");
        user2.setPassword("password2");
        user2.setEmail("email2@mail.com");
        user2.setProfilePicture(2);

        user3.setUsername("username3");
        user3.setPassword("password3");
        user3.setEmail("email3@mail.com");
        user3.setProfilePicture(1);

        testSetup("username1", "password1", "email1@mail.com", 3, false, user1);
        testSetup("username2", "password2", "email2@mail.com", 2, false, user2);
        testSetup("username3", "password3", "email3@mail.com", 1, false, user3);
    }
    
    @Test
    @DisplayName("Constructor")
    public void constructors() {

        User user1 = new User();
        testSetup(null, null, null, null, false, user1);

        User user2 = new User("User1", true);
        testSetup("User1", null, null, null, true, user2);

        User user3 = new User("User2", "Password1", "Email@mail.com", 2, true);
        testSetup("User2", "Password1", "Email@mail.com", 2, true, user3);

    }

}
