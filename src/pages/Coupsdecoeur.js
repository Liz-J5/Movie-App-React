import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

const Coupsdecoeur = () => {
  let storedData;
  storedData = window.localStorage.movies.split(",");
  const [movieData2, setMovieData2] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [sortOrder, setSortOrder] = useState();

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

      <div className="search">
        <input
          id="input"
          type="text"
          placeholder="Type here"
          onKeyDown={(e) => {
            if (e.code === "Enter") setSearchValue(e.target.value);
          }}
        />
        <button onClick={() => setSearchValue(document.getElementById("input").value)}>
          Rechercher
        </button>
        <button
          onClick={() => {
            setSearchValue("");
            document.getElementById("input").value = "";
          }}
        >
          Effacer
        </button>
      </div>

      <div className="topFlop">
        <button onClick={() => setSortOrder("Top")}>Top</button>
        <button onClick={() => setSortOrder("Flop")}>Flop</button>
      </div>

      <br />
      <br />
      {searchValue && <span>Resultats de la recherche:</span>}

      <div className="movieList">
        {movieData2
          .filter((movie) =>
            searchValue ? movie.title.toLowerCase().includes(searchValue) : movie
          )
          .sort((movie1, movie2) => {
            if (sortOrder == "Flop") {
              return movie1.vote_average - movie2.vote_average > 0 ? 1 : -1;
            } else if (sortOrder == "Top") {
              return movie2.vote_average - movie1.vote_average > 0 ? 1 : -1;
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Coupsdecoeur;
