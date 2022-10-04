import React, { useState, createContext, useEffect } from "react";
import { getRepositoryInformation, proccessCommitDataFromApi } from "../utils/utils";

interface AppContextInterface {
    name?: string;
    author?: string;
    url?: string;
}

export const ContextState = createContext<AppContextInterface | null | any>(null);

export const StateProvider = (props: any) => {
    const [repositoryInformation, setRepositoryInformation] = useState({});

    const [globalSearchTerm, setGlobalSearchTerm] = useState(17480);

    // test

    useEffect(() => {
        let dataObject: any = {};

        // We start off by getting a bunch of data from the gitlab repository
        getRepositoryInformation(JSON.parse(localStorage.getItem("key" || "{}")))
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

    return <ContextState.Provider value={[repositoryInformation, setRepositoryInformation]}>{props.children}</ContextState.Provider>;
};
