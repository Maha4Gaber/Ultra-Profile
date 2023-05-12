import React, {Component} from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import "./App.css"
import NavBar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Work from "./Components/Work";
import Portfolio from "./Components/Portfolio";
import Profile from "./Components/Profile";
import SocialMedia from "./Components/SocialMedia";

class App extends Component  {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/socialMedia" element={<SocialMedia />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
