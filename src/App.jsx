import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Modules/Home/Home";
const Video = React.lazy(() => import("./Modules/Video/Video"));
const Photo = React.lazy(() => import("./Modules/Photo/Photo"));
const Commercial = React.lazy(() => import("./Modules/Commercial/Commercial"));
const About = React.lazy(() => import("./Modules/About/About"));
const Contact = React.lazy(() => import("./Modules/Contact/Contact"));

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/video"
          element={
            <React.Suspense fallback="Loading...">
              <Video />
            </React.Suspense>
          }
        />
        <Route
          path="/photo"
          element={
            <React.Suspense fallback="Loading...">
              <Photo />
            </React.Suspense>
          }
        />
        <Route
          path="/commercial"
          element={
            <React.Suspense fallback="Loading...">
              <Commercial />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <React.Suspense fallback="Loading...">
              <Contact />
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
