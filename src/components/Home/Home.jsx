import { Navbar } from "../Navbar/Navbar";
import Carrousel from "../Carrousel/Carrousel";
import "./home.css";
import { Search } from "../Search/Search";

import { Movies } from "../Movies/Movies";
import { Footer } from "../shared/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carrousel />

      <h2>JMovies 🔱!</h2>
      <hr />

      <Search />
      <Movies />
      <Footer/>
    </>
  );
};
