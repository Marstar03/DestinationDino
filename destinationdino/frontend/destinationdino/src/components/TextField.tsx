import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export interface TextFieldProps {
  label: string;
  defaultValue: string;
}

const ProfileTextField: React.FC<TextFieldProps> = ({ label, defaultValue }) => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '27ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-read-only-input"
          label={label}
          defaultValue={defaultValue} // Use the defaultValue prop here
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </div>
    </Box>
  );
}

export default ProfileTextField;


