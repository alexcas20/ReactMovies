import { Navbar } from "../Navbar/Navbar";
import Carrousel from "../Carrousel/Carrousel";
import { useFetch } from "../../hooks/useFetch";
import "./home.css";
import { CardMovie } from "../CardMovie/CardMovie/CardMovie";

export const Home = () => {
  const URL = ` https://api.themoviedb.org/3/movie/`;
  const { data } = useFetch(URL,'popular');

  return (
    <>
      <Navbar />
      <Carrousel  />

      
        <h2>Popular Now! 🎇</h2>
        <hr />

       <CardMovie data={data}/>

      </>

  );
};
