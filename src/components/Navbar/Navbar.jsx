import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import MoviesIcon from "@mui/icons-material/Movie";
import SeriesIcon from "@mui/icons-material/Tv";






export const Navbar = () => {

 


  return (
 
      <nav className="nav-links">
        <a href="">
          <HomeIcon />
        </a>
        <a href="">
          <MoviesIcon />
        </a>
        <a href="">
          <SeriesIcon />
        </a>

       
      </nav>
      
  );
};
