import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RatingMovie } from "../shared/RatingMovie/RatingMovie";
import TimerIcon from "@mui/icons-material/Timer";

import "./singleMovie.css";

export const SingleMovie = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [genres, setGenres] = useState([]);
  const [vote, setVote] = useState(0);

  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjE0ZGM2YjhjY2UwODI0YzJiNmI0N2ExY2M3MWM5NSIsInN1YiI6IjY1Zjc4ZTBlYTZmZGFhMDE3ZDZlN2IxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NNXsCgXn-Q_Zh6lxy4IlZwIiLaomiOCA2gvaSe_zmU8";
  const ruta = `https://api.themoviedb.org/3/movie/${id}`;

  const fetchDetailsMovie = async () => {
    try {
      const response = await fetch(ruta, {
        headers: {
          Authorization: "Bearer " + API_KEY,
        },
      });
      const newData = await response.json();

      // actualizar estado
      setData(newData);
      setDate(newData.release_date);
      setGenres(newData.genres);
      setVote(newData.vote_average.toFixed(1));
      console.log(newData);
    } catch (error) {
      // Manejo de errores
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDetailsMovie();
  }, []);

  console.log(vote);

  return (
    <>
      <article>
        <section className="details-movie">
          <img
            src={` https://image.tmdb.org/t/p/w300/${data.poster_path}`}
            alt=""
          />
          <div className="details-info">
            <span>{date.slice(0, 4)}</span>
            <h3>{data.title}</h3>
            <RatingMovie rate={parseInt(vote)} />
            <p>{data.overview}</p>
            <div className="details-info-timer">
              <TimerIcon fontSize="medium" />
              <span>{data.runtime}m</span>
            </div>

            <ul className="details-info-genres">
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          {/* genres */}
          {/* vote_average */}
        </section>
      </article>
    </>
  );
};
