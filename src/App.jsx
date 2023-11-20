import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/loginPage";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [PageData, setPageData] = useState({});

  useEffect(() => {
    setPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation id="rootDiv" />
        <Header data={PageData.Header} />
        <About data={PageData.About} />
        <Services data={PageData.Services} />
        <Gallery data={PageData.Gallery} />
        <Team data={PageData.Team} />
        <Contact data={PageData.Contact} />

        <Routes>
          <Route path="/login" element={<Login data={PageData.Login} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
