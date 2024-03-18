import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

interface RatingStarsProps {
  onRatingChange: (value: number | null) => void;
  rating: number;
}

export default function RatingStars({ onRatingChange, rating }: RatingStarsProps) {
  const [value, setValue] = React.useState<number | null>(0);

  React.useEffect(() => {
    setValue(rating); // Update value whenever rating changes
  }, [rating]);

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