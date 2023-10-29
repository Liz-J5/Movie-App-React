import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

const Coupsdecoeur = () => {
  let storedData;
  storedData = window.localStorage.movies.split(",");
  const [movieData2, setMovieData2] = useState([]);

  useEffect(() => {
    if (storedData != "") {
      for (let x = 0; x < storedData.length; x++) {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${storedData[x]}?api_key=4d27c7ec90a5e3ee4d34208989344060&query=code&language=fr`
          )
          // On destructure pour ne pas ecraser la data a chaque boucle
          .then((res) => setMovieData2((movieData2) => [...movieData2, res.data]));
      }
    }
  }, []);

  return (
    <div>
      <Navigation />
      <div className="movieList">
        {movieData2.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Coupsdecoeur;
