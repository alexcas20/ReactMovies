import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import MoviesIcon from "@mui/icons-material/Movie";
import SeriesIcon from "@mui/icons-material/Tv";
import { IconButton } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search"




export const Navbar = () => {

  const URL = `https://api.themoviedb.org/3/search/movie?query=`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTUxMGEwMzBkNWM5YmJiNTQ4Yjc2OGE0N2EzYjI1YiIsInN1YiI6IjY1Zjc4ZTBlYTZmZGFhMDE3ZDZlN2IxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G6IKIUXlkVX51aDx0-MBx3-uA8gNGfKbz8huIDb-buw'
    }
  };

  const [search, setSearch] = useState('');
  const [dataSearch, setSearchResult] = useState([])
  


  const searchByKey = (e) => {
    if(e.keyCode === 13){
      handleClick();
    } else return
  }


  const handleClick = async () => {
   const respose = await fetch(URL+search, options);
   const data = await respose.json();
   console.log(data)
   setSearchResult(data);

    setSearch('');

  }



  return (
 
      <nav>
        <a href="">
          <HomeIcon />
        </a>
        <a href="">
          <MoviesIcon />
        </a>
        <a href="">
          <SeriesIcon />
        </a>

       <div className="search">
        <IconButton  >
          <SearchIcon/>
        </IconButton>
        <input
        
          onChange={ (e) => setSearch(e.target.value)}
          value={search}
          onKeyDown={searchByKey}
          type="text" placeholder="Search..." />

         </div>
      </nav>
      
  );
};
