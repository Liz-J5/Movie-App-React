import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Search = () => {
  const [searchValue, setSearchValue] = useState();
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=4d27c7ec90a5e3ee4d34208989344060&query=code&language=fr-FR"
      )
      .then((res) => setMovieTitles(res.data.results));
  }, []);

  // console.log(movieTitles.filter((movie) => movie.title.toLowerCase().includes("")));

  return (
    <div>
      <input id="input" type="text" placeholder="Type here" />
      <button onClick={() => setSearchValue(document.getElementById("input").value)}>Search</button>
      <div className="movieList">
        {movieTitles
          .filter((movie) => movie.title.toLowerCase().includes(searchValue))
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Search;
