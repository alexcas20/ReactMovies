/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState("movie/popular");
  const { isLoading, error, data } = useFetch(`${query}`);

  console.log("dataContext: ", data)

  return (
    <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
      {children}
    </DataContext.Provider>
  );
};
