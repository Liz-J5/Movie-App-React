import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

const Coupsdecoeur = () => {
  let test;
  test = window.localStorage.movies.split(",");
  let movieCoeurs = [];
  const [movieData2, setMovieData2] = useState([]);

  useEffect(() => {
    for (let x = 0; x < test.length; x++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${test[x]}?api_key=4d27c7ec90a5e3ee4d34208989344060&query=code&language=fr`
        )
        .then((res) => movieCoeurs.push(res.data))
        .then(() => setMovieData2(movieCoeurs));
    }

    console.log(movieData2.length);
  }, []);
  // movieData.map((el) => console.log(el));
  // const list = movieData.map((el) => <li key={el.title}>{el.title}</li>);

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
