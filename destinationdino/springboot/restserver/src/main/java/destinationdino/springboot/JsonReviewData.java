package destinationdino.springboot;

public class JsonReviewData {

    private String name;
    private int rating;
    private String review;

    // Getters and setters...

    public JsonReviewData(String name, int rating, String review) {
        this.name = name;
        this.rating = rating;
        this.review = review;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }
}
