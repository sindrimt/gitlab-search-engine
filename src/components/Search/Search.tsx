import React, { useState, useContext } from "react";
import { MdSearch } from "react-icons/md";
import { SearchOuter } from "./SearchStyles";

import { ContextState } from "../../context/ContextState";
import { getRepositoryInformation, proccessCommitDataFromApi } from "../../utils/utils";

const Search = () => {
    const [repositoryInformation, setRepositoryInformation] = useContext(ContextState);

    const [searchTermFromInput, setSearchTermFromInput] = useState(17480);
    const [backup, setBackup] = useState(repositoryInformation);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // we set the state to be empty, so that the loading animation shows until the data has arrived
        setRepositoryInformation({});

        getRepositoryInformation(searchTermFromInput)
            .then((data) => {
                setRepositoryInformation(data);
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
                            type="text"
                            placeholder="Enter Gitlab Repository ID"
                            onChange={(e: any) => setSearchTermFromInput(e.target.value ? e.target.value : 17480)}
                        />
                        <button type="submit">search</button>
                    </div>
                </form>
                <h3>{repositoryInformation?.other?.name_with_namespace}</h3>
            </SearchOuter>
        </section>
    );
};

export default Search;
