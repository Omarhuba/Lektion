import "./App.css";
import "./module/index.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Bootcamp } from "./components/Pages/Bootcamp";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Bootcamp" element={<Bootcamp />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

          
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
