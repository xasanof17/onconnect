import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import User from './components/User/User'
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<User />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
