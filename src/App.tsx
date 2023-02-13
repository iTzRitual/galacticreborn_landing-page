import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/MainPage";
import Presale from "./pages/Presale";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/presale" element={<Presale />} /> */}
    </Routes>
  );
}

export default App;
