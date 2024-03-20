import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import { postRequest } from "../httpMethods/postRequest";
import { reviewPostRequest } from "../httpMethods/reviewPostRequest";
import { UserProfileProps } from "../components/UserProfile";
import RatingStars from "../components/RatingStars";
import { useParams, useNavigate } from "react-router-dom";
import { ReviewProps } from "../components/ReviewBox";


interface ReviewFormValues {
    rating: number;
    review: string;
    //name: string;
  }

export default function ReviewPage() {
    const { name } = useParams();

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState<ReviewFormValues>({
        rating: 0,
        review: "",
        //name: "",
      });

    const [savedFormValues, setSavedFormValues] = useState<ReviewFormValues>({
        rating: 0,
        review: "",
        //name: "",
      });
    
      const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Handlechange kall:");
        const { name, value } = event.target;
        console.log("Nye verdier: ", name, value);
        console.log("Gamle formvalues: ", formValues)
        setFormValues({ ...formValues, [name]: value });
        console.log("Nye formvalues: ", formValues)
      };

      const handleRatingChange = (newRating: number | null) => {
        if (newRating != null) {
          setFormValues({ ...formValues, rating: newRating });
        }
      };
    
      // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      //   console.log("her?2");
      //   event.preventDefault();
      //   // Send data to server
    
      const apiUrl = "http://localhost:8080/hasVisited"; // Update the URL to match your backend endpoint
      const { postData, data, loading, error } = reviewPostRequest(apiUrl);
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const ratingString = data.get("rating") as string;
        const rating = parseInt(ratingString);
        const review = data.get("review") as string;
        //const name = data.get("name") as string;
        console.log("rating: ", rating);
        if (rating <= 0 || Number.isNaN(rating)) {
            console.log("Rating is required");
            window.alert("Rating is required");
            return;
        }
        if (savedFormValues.rating != -1) {
          window.alert("You have already reviewed this destination. \nGo to profile page to edit existing review.");
          return;
        }
        /* console.log(name);
        console.log(rating);
        console.log(review);
        await postData({ name, rating, review });

        console.log("posted data: ", { name, rating, review }); */
        
        const jsonReviewData = {
          //userId: currentUser?.username,
          name: name,
          rating: rating,
          review: review,
        };

        console.log("hasVisited på JSON-format: ", jsonReviewData);
      
        await postData(jsonReviewData);

        setFormValues({
          rating: 0,
          review: "",
          //name: "",
        });
        navigate(`/DestinationInformation/${encodeURIComponent(name.trim())}`);
      };
    
      const [currentUser, setCurrentUser] = useState<UserProfileProps | null>(null);
      const [reviews, setReviews] = useState<ReviewProps[]>([]); // Add this line
    
      useEffect(() => {
        async function fetchData() {
          try {
            const apiUrl = `http://localhost:8080/currentUser`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const userData = await response.json();
            setCurrentUser(userData);

            const reviewsResponse = await fetch(`http://localhost:8080/hasVisited/user?username=${userData.username}`);
            const reviewsData = await reviewsResponse.json();
            const filteredReviews = reviewsData.filter((hasVisited: any) => hasVisited.destination.name === name);
            const reviews = filteredReviews.map((hasVisited: any) => ({
            destinationId: hasVisited.destination.name,
            rating: hasVisited.rating,
            review: hasVisited.review
            }));
            setReviews(reviews);
            savedFormValues.rating = reviews[0].rating;
            savedFormValues.review = reviews[0].review;

          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, []); // Empty dependency array ensures the effect runs only once on component mount
    
      console.log("Nåværende innloggede bruker: ", currentUser);
      //console.log(currentUser?.admin);
      //const name = "hei";
    
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <h2>Rating for {name}</h2>
        <RatingStars onRatingChange={handleRatingChange} rating={0}/>        
        <TextField
            margin="normal"
            required
            fullWidth
            id="review"
            label="How was your experience?"
            name="review"
            autoComplete="information"
            multiline
            rows={4}
            value={formValues.review}
            onChange={handleReviewChange}
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Add Review
        </Button>
        </Box>
    );
      
}