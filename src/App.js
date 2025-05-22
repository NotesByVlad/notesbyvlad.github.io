import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import router components
import Navbar from "./components/Navbar/Navbar";
// import pages
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Passions from "./pages/Passions/Passions";

import FunExperiments from "./pages/FunExperiments/FunExperiments";
// import under construction banner
import UnderConstruction from "./components/UnderConstruction";

function App() {
  const isUnderConstruction = true; // true while under construction

  return (
    <Router>
      <div>
        <Navbar /> {/*Navbar component*/}
        {isUnderConstruction && <UnderConstruction />}
        <Routes>
          {/*Routes for all pages*/}
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/passions" element={<Passions />} />

          <Route path="/funexperiments" element={<FunExperiments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
