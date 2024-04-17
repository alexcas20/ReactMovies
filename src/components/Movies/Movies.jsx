import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { CardMovie } from "../CardMovie/CardMovie";
import "./movies.css"

export const Movies = () => {
  const { isLoading, data } = useContext(DataContext);

  console.log(data)
  return (
    <article>
      {!isLoading
       ? data.map((item) => (
            <CardMovie
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
            />
          ))
        : "No hay data"}
    </article>
  );
};