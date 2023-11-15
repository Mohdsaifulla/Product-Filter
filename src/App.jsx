import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
