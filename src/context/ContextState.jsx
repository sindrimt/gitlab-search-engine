import React, { useState, createContext, useEffect } from "react";
import { getRepositoryInformation, proccessCommitDataFromApi } from "../utils/utils";

export const ContextState = createContext();

export const StateProvider = (props) => {
    const [repositoryInformation, setRepositoryInformation] = useState({});

    useEffect(() => {
        let dataObject = {};

        // We start off by getting a bunch of data from the gitlab repository
        getRepositoryInformation(17480)
            .then((data) => {
                dataObject = data;
            })

            // Then count how many commits each member has
            .then(() => {
                proccessCommitDataFromApi(dataObject)
                    .then((result) => {
                        dataObject["members"] = result;
                        setRepositoryInformation(dataObject);
                    })
                    .then(() => {
                        console.log(repositoryInformation);
                    });
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
