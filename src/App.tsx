import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/portfolio/navigation/Navigation";

function App() {
  return (
   <>
   <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="users/*" element={<Users />} /> */}
    </Routes>
   </>
  );
}

export default App;
