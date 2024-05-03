import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarIcon from '@mui/icons-material/Star';


import "./ratingMovie.css";

// eslint-disable-next-line react/prop-types
export const RatingMovie = ({ rate }) => {


    
  return (
    <article className="rate">
        <section className="rate-stars">
        <Stack spacing={1} >
        <Rating
        
          name="half-rating-read"
          value={rate}
          precision={0.5}
          max={10}
          readOnly
          emptyIcon={<StarIcon style={{ color: 'grey' }} />}
          icon={<StarIcon style={{ color: '#eded08ba' }} /> }
        />
      </Stack>
        </section>
      
    </article>
  );
};
