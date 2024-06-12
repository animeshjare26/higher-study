import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Faq from "./routes/Faq";
import PastSeminar from "./routes/PastSeminar";
import About from "./routes/About";
import Register from "./routes/Register";


function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/pastSeminar" element={<PastSeminar />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
