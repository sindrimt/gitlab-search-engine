import React from "react";
import "./App.css";

import Commits from "./components/Commits";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/commits" element={<Commits />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
