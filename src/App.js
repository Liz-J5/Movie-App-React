import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Coupsdecoeur from "./pages/Coupsdecoeur.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coups-de-coeur" element={<Coupsdecoeur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
