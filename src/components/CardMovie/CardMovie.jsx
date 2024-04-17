/* eslint-disable react/prop-types */

import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./cardMovie.css";
import { Link } from "react-router-dom";

export const CardMovie = ({ id, title, poster_path }) => {
  return (
    <section>
      <div className="card">
        <img src={` https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
        <Link to={`/movies/${id}`}>
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        </Link>
      </div>

      <h3 className="card-title">{title}</h3>
    </section>
  );
};
