package destinationdino.springboot;

import java.io.Serializable;
import java.util.Objects;

//import jakarta.persistence.Column;

public class HasVisitedId implements Serializable {

    // @Column(nullable = false)
    private String user;
    // @Column(nullable = false)
    private String destination;

    public HasVisitedId() {

    }

    public HasVisitedId(String user, String destination) {
        this.user = user;
        this.destination = destination;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        HasVisitedId hasVisitedId = (HasVisitedId) o;
        return Objects.equals(user, hasVisitedId.user) && Objects.equals(destination, hasVisitedId.destination);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, destination);
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

}
