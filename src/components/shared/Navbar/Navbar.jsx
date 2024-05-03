import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import MoviesIcon from "@mui/icons-material/Movie";
import SeriesIcon from "@mui/icons-material/Tv";
import { Link } from "react-router-dom";






export const Navbar = () => {

 


  return (
      <header>
         <nav className="nav-links">
        <Link to={"/"} >
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
