import React from "react";
import Navigation from "../components/Navigation";
// import Card from "../components/Card";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Movies />
      {/* <Card /> */}
      <h3>Home</h3>
    </div>
  );
};

export default Home;
