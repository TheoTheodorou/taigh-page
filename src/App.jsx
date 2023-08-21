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

// Consider creating a Loading component for better UX
const Loading = () => <div>Loading...</div>;

const AppRoutes = () => (
  <React.Suspense fallback={"<Loading />"}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Video />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </React.Suspense>
);

function App() {
  return (
    <BrowserRouter>
      <div className=" mx-auto max-w-screen-2xl">
        <div className="flex min-h-screen flex-col">
          <div className="flex-grow">
            <Navbar />
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
