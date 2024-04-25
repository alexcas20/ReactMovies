import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { CardMovie } from "../CardMovie/CardMovie";
import "./movies.css"
import { Spinner } from "../shared/Spinner/Spinner";

export const Movies = () => {
  const { isLoading, data } = useContext(DataContext);

  console.log(data)
  return (
    
    <article>
      {!isLoading && data.length > 0
       ? data.map((item) => (
            <CardMovie
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
            />
          ))
        
      : (!data.length)
      ? <h3>No data found</h3>
      : <Spinner/>}
    </article>
  );
};
