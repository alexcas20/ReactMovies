
import Carrousel from "../Carrousel/Carrousel";
import "./home.css";
import { Search } from "../Search/Search";

import { Movies } from "../Movies/Movies";

export const Home = () => {
  return (
    <>
   
      <Carrousel />

  
     

      <Search />
      {/* <hr className="separator" /> */}
      <Movies />
     
    </>
  );
};
