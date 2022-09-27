import React, { useState, createContext, useEffect } from "react";
import { getRepositoryInformation } from "../utils/utils";

export const ContextState = createContext();

export const StateProvider = (props) => {
    /* const [commits, setCommits] = useState(3);
    const [stars, setStars] = useState(3);
    const [repositoryName, setRepositoryName] = useState("Test"); */

    const [repositoryInformation, setRepositoryInformation] = useState({});

    useEffect(() => {
        getRepositoryInformation(17480).then((data) => {
            setRepositoryInformation(data);
            console.log(data);
        });
    }, []);

    return (
        <ContextState.Provider
            value={[/* commits, setCommits, stars, setStars, repositoryName, setRepositoryName */ repositoryInformation, setRepositoryInformation]}
        >
            {props.children}
        </ContextState.Provider>
    );
};
