import React, { useState, useContext, useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";
import { SearchOuter, Test } from "./SearchStyles";

import { ContextState } from "../../context/ContextState";
import { getRepositoryInformation, proccessCommitDataFromApi } from "../../utils/utils";

const Search = () => {
    const [
        repositoryInformation,
        setRepositoryInformation,
        globalSearchTerm,
        setGlobalSearchTerm,
        dataSource,
        setDataSource,
        previousSearches,
        accessToken,
        setAccessToken,
    ] = useContext(ContextState);

    const [searchTermFromInput, setSearchTermFromInput] = useState(17480);
    const [accessTokenFromInput, setAccessTokenFromInput] = useState(accessToken);
    const [backup, setBackup] = useState(repositoryInformation);
    const [showPrevSearches, setShowPrevSearches] = useState(false);

    const inputRef = useRef(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let newData: any = {};

        previousSearches.push(searchTermFromInput);

        // we set the state to be empty, so that the loading animation shows until the data has arrived
        setRepositoryInformation({});

        getRepositoryInformation(searchTermFromInput, accessTokenFromInput)
            .then((data) => {
                newData = data;
                setRepositoryInformation(data);

                sessionStorage.setItem("shortKey", previousSearches);
                sessionStorage.setItem("accessToken", accessTokenFromInput);

                //console.log(JSON.parse(sessionStorage.getItem("shortKey") || ""));

                localStorage.setItem("key", JSON.stringify(searchTermFromInput));
            })
            .then(() => {
                // api data get
                proccessCommitDataFromApi(newData, JSON.parse(localStorage.getItem("key") || ""), accessTokenFromInput)
                    .then((result) => {
                        newData["members"] = result;
                        setRepositoryInformation(newData);
                    })
                    .then(() => {
                        console.log("new data");
                        console.log(newData);
                        setDataSource(newData);
                        // console.log(repositoryInformation);
                    });
            })

            .catch((err) => {
                //TODO Handle error better here with frontend feedback
                console.log(err);

                // If there is an error, put the backup data into the original object
                setRepositoryInformation(backup);
                return;
            });
    };

    return (
        <section className="section">
            <SearchOuter className="section-center">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input
                            ref={inputRef}
                            id="input"
                            type="text"
                            placeholder="Enter Gitlab Repository ID"
                            onChange={(e: any) => setSearchTermFromInput(e.target.value ? e.target.value : 17480)}
                            onFocus={() => setShowPrevSearches(true)}
                            onBlur={() => setShowPrevSearches(false)}
                        />
                        <input
                            id="input"
                            type="text"
                            className="access-token"
                            placeholder="Enter Gitlab Access Token"
                            onChange={(e: any) => setAccessTokenFromInput(e.target.value ? e.target.value : "glpat-FF2rY-Gy-Pjzwqsh4467")}
                        />

                        {showPrevSearches && (
                            <Test>
                                {previousSearches?.map((searchTerm: any, index: number) => {
                                    return (
                                        <div key={index} onClick={() => console.log("dfsgn")}>
                                            {searchTerm}
                                        </div>
                                    );
                                })}
                            </Test>
                        )}

                        <button id="button" type="submit">
                            search
                        </button>
                    </div>
                </form>
                <h3 id="repoInfo">{repositoryInformation?.other?.name_with_namespace}</h3>
            </SearchOuter>
        </section>
    );
};

export default Search;
