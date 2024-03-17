import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

interface RatingStarsProps {
  onRatingChange: (value: number | null) => void;
}

export default function RatingStars({ onRatingChange }: RatingStarsProps) {
  const [value, setValue] = React.useState<number | null>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
    onRatingChange(newValue);
  };

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="rating"
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}