import Home from "./components/Home";
import VerticalNavigation from './components/VerticalNaviagtion';
import './App.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";


function App() {
  const [isFilter, setIsFilter] = useState(true);
  const [isCancel, setIsCancel] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);

  useEffect(() => {
    const url = window.location.href;
    const path = url.split('/').pop();

    if (path === '') {
      home();
    } else if (path === 'contact') {
      contact();
    } else if (path === 'about') {
      about();
    }
  }, [])

  const home = () => {
    setIsHome(true);
    setIsAbout(false);
    setIsContact(false)
    setIsCancel(false);
    setIsFilter(true);
  }
  const about = () => {
    setIsHome(false);
    setIsAbout(true);
    setIsContact(false)
    setIsCancel(false);
    setIsFilter(true);
  }
  const contact = () => {
    setIsHome(false);
    setIsAbout(false);
    setIsContact(true)
    setIsCancel(false);
    setIsFilter(true);
  }
  const filter = () => {
    setIsFilter(false);
    setIsCancel(true);
  }
  const cancel = () => {
    setIsCancel(false);
    setIsFilter(true);
  }
  const cart = () => {
    setIsHome(false);
    setIsAbout(false);
    setIsContact(false)
  }
  return (
    <Router>
      <div className="App">
        <NavBar isFilter={isFilter} isCancel={isCancel} filter={filter} cancel={cancel} isAbout={isAbout} isContact={isContact} isHome={isHome} home={home} contact={contact} about={about} />
        <VerticalNavigation isAbout={isAbout} isContact={isContact} isHome={isHome} home={home} contact={contact} about={about} isCancel={isCancel} />
        <Routes>
          <Route path={"/"} element={<Home cart={cart} />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/cart"} element={<CartContainer cart={cart} />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
        <Footer contact={contact} home={home} about={about} isAbout={isAbout} isContact={isContact} isHome={isHome} />
      </div>
    </Router>
  );
}

export default App;
