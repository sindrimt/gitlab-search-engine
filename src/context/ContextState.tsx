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

    useEffect(() => {
        let dataObject: any = {};

        // We start off by getting a bunch of data from the gitlab repository
        getRepositoryInformation(globalSearchTerm)
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
