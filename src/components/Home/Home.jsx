import { Navbar } from "../Navbar/Navbar";
import Carrousel from "../Carrousel/Carrousel";
import "./home.css";
import { Search } from "../Search/Search";

import { Movies } from "../Movies/Movies";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carrousel />

      <h2>Popular Now! 🎇</h2>
      <hr />

      <Search />
      <Movies />
    </>
  );
};
