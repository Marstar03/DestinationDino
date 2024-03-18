import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; // Added for vertical alignment
  height: 100px;
`;

interface CustomCheckboxProps {
  destinationId: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ destinationId }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const checkVisitedStatus = async () => {
      try {
        const apiUrl = `http://localhost:8080/userHasVisited?destinationName=${encodeURIComponent(
          destinationId
        )}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const hasVisited = await response.json();
        setIsChecked(hasVisited);
      } catch (error) {
        console.error("Error fetching visited status:", error);
      }
    };

    checkVisitedStatus();
  }, [destinationId]);

  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedStatus = event.target.checked;
    setIsChecked(newCheckedStatus);

    let apiUrl;

    if (newCheckedStatus) {
      apiUrl = `http://localhost:8080/addHasVisited?destinationName=${encodeURIComponent(
        destinationId
      )}`;
    } else {
      apiUrl = `http://localhost:8080/removeHasVisited?destinationName=${encodeURIComponent(
        destinationId
      )}`;
    }
    console.log(apiUrl);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        // Revert the checkbox state in case of failure
        setIsChecked(!newCheckedStatus);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating visited status:", error);
    }
  };

  return (
    <CheckboxContainer>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleOnChange}
            size="medium" // Customizable: 'small', 'medium', 'large'
            sx={{
              "& .MuiSvgIcon-root": {
                // Targeting the SVG icon inside the Checkbox
                fontSize: 120, // Adjust size as needed
              },
            }}
            color="primary" // Customizable: 'primary', 'secondary', 'default'
          />
        }
        label={
          <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
            {" "}
            {/* Adjust font size as needed */}
            {isChecked ? "Has visited" : "Has not visited"}
          </Typography>
        }
      />
    </CheckboxContainer>
  );
};

export default CustomCheckbox;
