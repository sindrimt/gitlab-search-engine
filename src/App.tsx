import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Stats from "./components/Stats/Stats";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Search />
            <Info />
            <Stats />
            <Footer />
        </>
    );
};

export default App;
