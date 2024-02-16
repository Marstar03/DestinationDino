package destinationdino.springboot;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    private String username;

    private String password;
    private String email;
    private String profilePicture;
    private boolean isAdmin;

    public User() {
        
    }

    public User(String username, boolean isAdmin) {
        setUsername(username);
        if (isAdmin == true || isAdmin == false) {
            this.isAdmin = isAdmin;
        }
    }

    public User(String username, String password, String profilePicture, boolean isAdmin) {
        setUsername(username);
        setPassword(password);
        setProfilePicture(profilePicture);
        if (isAdmin == true || isAdmin == false) {
            this.isAdmin = isAdmin;
        }
    }

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    private transient List<HasVisited> hasVisitedList;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public boolean isAdmin() {
        return isAdmin;
    }
    
}
