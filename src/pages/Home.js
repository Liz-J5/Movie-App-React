import React from "react";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Search />
      <Movies />
    </div>
  );
};

export default Home;
