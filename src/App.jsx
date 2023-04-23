import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Modules/Home/Home";
import Video from "./Modules/Video/Video";
import Photo from "./Modules/Photo/Photo";
import Commercial from "./Modules/Commercial/Commercial";
import About from "./Modules/About/About";
import Contact from "./Modules/Contact/Contact";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
