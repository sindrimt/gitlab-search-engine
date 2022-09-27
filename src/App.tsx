import React, { useEffect, useContext } from "react";
import "./App.css";

import { StateProvider } from "./context/ContextState";

import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Stats from "./components/Stats/Stats";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import { getRepositoryInformation } from "./utils/utils";

const App = () => {
    return (
        <StateProvider>
            <Navbar />
            <Search />
            <Info />
            <Stats />
            <Footer />
        </StateProvider>
    );
};

export default App;
