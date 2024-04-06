/* eslint-disable react/prop-types */

import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./cardMovie.css";

export const CardMovie = ({ data }) => {
  return (
   <article>
   
   {data.map((movie) => {
        return (
          <asside key={movie.id}>
             <div className="card" >
              <img
                src={` https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt=""
              />
              <IconButton aria-label="delete">
                <RemoveRedEyeIcon />
              </IconButton>
            
            </div>

            <h3 className="card-title">{movie.title}</h3>

        
              
          </asside>
           

        );
      })}
   
   </article>
      
  
  );
};
