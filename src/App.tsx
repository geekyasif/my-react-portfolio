import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/portfolio/navigation/Navigation";
import UserProvider from "./context/UserProvider";

function App() {

  return (
    <>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
