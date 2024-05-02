import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './singleMovie.css'

export const SingleMovie = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
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
      setDate(newData.release_date)
      console.log(newData);
    } catch (error) {
      // Manejo de errores
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDetailsMovie();
  }, []);
  

  return (
    <article>
      
      <section>
        <img src={` https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt="" />
        <div className="details-info">
        <span>{date.slice(0,4)}</span>
        <h3>{data.title}</h3>
        <p>{data.overview}</p>
        </div>
        
      </section>
    </article>
  );
};
