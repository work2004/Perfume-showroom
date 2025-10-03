import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
        <div className="bg-white min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
          <Footer/>
        </div>
    </>
  );
}
export default App;
