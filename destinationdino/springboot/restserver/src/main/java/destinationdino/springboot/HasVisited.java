package destinationdino.springboot;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "hasVisited")
@IdClass(HasVisitedId.class)
public class HasVisited {
    
    @Id
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @Id
    @ManyToOne
    @JoinColumn(name = "destinationId")
    private Destination destination;

    private int review;

    public HasVisited() {

    }

    public HasVisited(User user, Destination destination) {
        setUser(user);
        setDestination(destination);
    }

    public HasVisited(User user, Destination destination, int review) {
        setUser(user);
        setDestination(destination);
        setReview(review);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }

    public int getReview() {
        return review;
    }

    public void setReview(int review) {
        this.review = review;
    }


}
