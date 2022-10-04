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

    const [dataSource, setDataSource] = useState({});
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem("accessToken") || "glpat-FF2rY-Gy-Pjzwqsh4467");

    const previousSearches: any = sessionStorage.getItem("shortKey")?.split(",") || [];

    useEffect(() => {
        let dataObject: any = {};

        // We start off by getting a bunch of data from the gitlab repository
        getRepositoryInformation(JSON.parse(localStorage.getItem("key") || ""), accessToken)
            .then((data) => {
                dataObject = data;
            })

            // Then count how many commits each member has
            .then(() => {
                proccessCommitDataFromApi(dataObject, JSON.parse(localStorage.getItem("key") || ""), accessToken)
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
            value={[
                repositoryInformation,
                setRepositoryInformation,
                globalSearchTerm,
                setGlobalSearchTerm,
                dataSource,
                setDataSource,
                previousSearches,
                accessToken,
                setAccessToken,
            ]}
        >
            {props.children}
        </ContextState.Provider>
    );
};
