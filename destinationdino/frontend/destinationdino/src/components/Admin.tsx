import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { postRequest } from "../httpMethods/postRequest";
import { UserProfileProps } from "./UserProfile";

interface AdminFormValues {
  name: string;
  country: string;
  imageUrl: string;
  information: string;
}

const Admin: React.FC = () => {
  const [formValues, setFormValues] = useState<AdminFormValues>({
    name: "",
    country: "",
    imageUrl: "",
    information: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("her?");
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   console.log("her?2");
  //   event.preventDefault();
  //   // Send data to server

  const apiUrl = "http://localhost:8080/addDestination"; // Update the URL to match your backend endpoint
  const { postData, data, loading, error } = postRequest(apiUrl);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") as string;
    const country = data.get("country") as string;
    const picture = data.get("imageUrl") as string;
    const info = data.get("information") as string;
    console.log(name);
    console.log(country);
    console.log(picture);
    console.log(info);
    await postData({ name, country, picture, info });
    console.log(formValues);
    setFormValues({
      name: "",
      country: "",
      imageUrl: "",
      information: "",
    });
  };

  const [currentUser, setCurrentUser] = useState<UserProfileProps | null>(null);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  console.log(currentUser);
  console.log(currentUser?.admin);

  if (!currentUser?.admin) {
    return <div>Only for admin</div>;
  } else {
    return (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Destination Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={formValues.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="country"
          label="Country"
          name="country"
          autoComplete="country"
          value={formValues.country}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="imageUrl"
          label="Image URL"
          name="imageUrl"
          autoComplete="imageUrl"
          value={formValues.imageUrl}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="information"
          label="Information"
          name="information"
          autoComplete="information"
          multiline
          rows={4}
          value={formValues.information}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    );
  }
};

export default Admin;
