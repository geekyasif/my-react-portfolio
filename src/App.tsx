import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/portfolio/navigation/Navigation";
import UserProvider from "./context/UserProvider";
import ProjectDetails from "./pages/project-details";
import Porjects from "./pages/projects";
import About from "./pages/about";
import Blog from "./pages/blog";

function App() {
  return (
    <>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Porjects />} />
          <Route path="/project-details/:slug" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
