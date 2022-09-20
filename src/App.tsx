import React from "react";
import "./App.css";

import Commits from "./components/Commits";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div>Navbar</div>
            <Routes>
                <Route path="/" element={<div>Homepage</div>} />
                <Route path="/commits" element={<Commits />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
