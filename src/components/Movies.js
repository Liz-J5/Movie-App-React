import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=4d27c7ec90a5e3ee4d34208989344060&query=code&language=fr-FR"
      )
      .then((res) => setMovieData(res.data.results));
  }, []);

  return (
    <div className="movieList">
      {movieData.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
