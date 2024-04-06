import { useEffect, useState } from "react"


export const useFetch = (url) => {


 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTUxMGEwMzBkNWM5YmJiNTQ4Yjc2OGE0N2EzYjI1YiIsInN1YiI6IjY1Zjc4ZTBlYTZmZGFhMDE3ZDZlN2IxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G6IKIUXlkVX51aDx0-MBx3-uA8gNGfKbz8huIDb-buw'
    }
  };


  const [data, setData] = useState([]);


  const getFetch = async () => {
    try {

      const response = await fetch(url, options);
      const dataResponse = await response.json();
      setData(dataResponse.results);

      console.log(dataResponse.results);


      
    } catch (error) {

      console.log(error);
      
    }
  };


  useEffect (() => {
    getFetch();
  }, []);


  return {
   data
  }
 



}