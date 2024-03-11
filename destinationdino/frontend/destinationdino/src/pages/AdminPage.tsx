import Admin from "../components/Admin";
import Button from "@mui/material/Button";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function AdminPage() {

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

    // return <Admin/>;
    
}