import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel"; // For labeling
import styled from "styled-components";
import Typography from "@mui/material/Typography";
const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; // Added for vertical alignment
  height: 100px;
`;

const CustomCheckbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
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
