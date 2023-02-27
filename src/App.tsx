import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/presale" element={<Presale />} /> */}
    </Routes>
  );
}

export default App;
