import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { UserProfileProps } from "../components/UserProfile";

export default function AdminPage() {

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

    if (currentUser?.admin) {
        return (
            <div className="adminChoice">
                <div className="adminButtonChoice">
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={() => {
                            window.location.href='/Admin/AddDestination';
                          }}
                    >
                        Add new destination
                    </Button>
                </div>
                <div className="adminButtonChoice">
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={() => {
                            window.location.href='/Admin/EditDestination';
                          }}
                    >
                        Edit existing destination
                    </Button>
                </div>
            </div>
        )
    } else {
        return <div>Only for admin</div>;
    }

    // return <Admin/>;
    
}