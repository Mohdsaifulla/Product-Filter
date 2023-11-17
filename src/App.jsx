import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/searchContext";
import BottomHeader from "./components/BottomHeader";
const App = () => {
  return (
    <SearchProvider>
    <div>
      <Router>
        <Header/>
        <BottomHeader/>
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
