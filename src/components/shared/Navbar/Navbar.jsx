import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import MoviesIcon from "@mui/icons-material/Movie";
import SeriesIcon from "@mui/icons-material/Tv";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";
import { useContext } from "react";






export const Navbar = () => {

  const {setQuery} = useContext(DataContext);
  const url = "movie/popular";

 
  const handleClick = () => {
    setQuery(url);
  }

  return (
      <header>
         <nav className="nav-links">
        <Link to={"/"} onClick={handleClick} >
          <HomeIcon />
        </Link>
        <Link to={"/"}>
          <MoviesIcon />
        </Link>
        <a href="">
          <SeriesIcon />
        </a>

       
      </nav>
      </header>
     
      
  );
};
