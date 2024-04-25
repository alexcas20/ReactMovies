/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
import "./search.css";
import { DataContext } from "../../context/DataContext";

export const Search = () => {
  const [title, setTitle] = useState("");
  const { setQuery, error } = useContext(DataContext);

  const addRuta = "search/movie?query=";

  const handleKey = (e) => {
    if(e.keyCode === 13) 
      handleSubmit(e);
    else return
  }

  const handleInputChange = (e) => {
    setTitle(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(addRuta + title);
    setTitle("");

    console.log(title);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search a Movie..."
        className="search"
        onChange={handleInputChange}
        value={title}
        onKeyDown={handleKey}
      />
      <button type="submit" className="btn-search">
        Search
      </button>
    </form>
  );
};
