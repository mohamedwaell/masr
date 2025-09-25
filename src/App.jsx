import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import History from "./sections/History";
import Pharaohs from "./sections/Pharaohs";
import Games from "./sections/Games";
import Monuments from "./sections/Monuments";
import Museums from "./sections/Museums";
import ScrollToTop from "./components/ScrollToTop";
import HistoryDetail from "./components/HistoryDetail";
import MonumentDetail from "./components/MonumentDetail";
import MuseumDetail from "./components/MuseumDetail";
import Pharoahsdetial from "./components/Pharoahsdetial";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setVisible(false), 1000); // optional: fully remove after fade
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <Router>
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-700 ${
          loading
            ? "opacity-100 pointer-events-auto z-55"
            : "opacity-0 pointer-events-none"
        } ${visible ? "" : "hidden"}`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" />
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:id" element={<HistoryDetail />} />

        <Route path="/pharaohs" element={<Pharaohs />} />
        <Route path="/pharaohs/:id" element={<Pharoahsdetial />} />

        <Route path="/games" element={<Games />} />
        <Route path="/monuments" element={<Monuments />} />
        <Route path="/monuments/:id" element={<MonumentDetail />} />

        <Route path="/museums" element={<Museums />} />
        <Route path="/museums/:id" element={<MuseumDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
