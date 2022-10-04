import React, { useState, useContext, useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";
import { SearchOuter, Test } from "./SearchStyles";

import { ContextState } from "../../context/ContextState";
import { getRepositoryInformation, proccessCommitDataFromApi } from "../../utils/utils";
import { isNamedExportBindings } from "typescript";

const Search = () => {
    const [repositoryInformation, setRepositoryInformation, globalSearchTerm, setGlobalSearchTerm, dataSource, setDataSource, previousSearches] =
        useContext(ContextState);

    const [searchTermFromInput, setSearchTermFromInput] = useState(17480);
    const [backup, setBackup] = useState(repositoryInformation);
    const [showPrevSearches, setShowPrevSearches] = useState(false);

    const inputRef = useRef(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newData: any = {};

        console.log("epic");
        console.log(sessionStorage.getItem("shortKey") || "");

        previousSearches.push(searchTermFromInput);
        console.log(previousSearches);

        // we set the state to be empty, so that the loading animation shows until the data has arrived
        setRepositoryInformation({});

        getRepositoryInformation(searchTermFromInput)
            .then((data) => {
                newData = data;
                setRepositoryInformation(data);

                sessionStorage.setItem("shortKey", previousSearches);

                //console.log(JSON.parse(sessionStorage.getItem("shortKey") || ""));

                localStorage.setItem("key", JSON.stringify(searchTermFromInput));
            })
            .then(() => {
                // api data get
                proccessCommitDataFromApi(newData, JSON.parse(localStorage.getItem("key") || ""))
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
            });
    };

    return (
        <section className="section">
            <SearchOuter className="section-center">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <MdSearch />
                        <input
                            ref={inputRef}
                            id="input"
                            type="text"
                            placeholder="Enter Gitlab Repository ID"
                            onChange={(e: any) => setSearchTermFromInput(e.target.value ? e.target.value : 17480)}
                            className="searchBox"
                            onFocus={() => setShowPrevSearches(true)}
                            onBlur={() => setShowPrevSearches(false)}
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
