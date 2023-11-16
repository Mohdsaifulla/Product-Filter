import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/searchContext";
const App = () => {
  return (
    <SearchProvider>
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
    </SearchProvider>
  );
};

export default App;
