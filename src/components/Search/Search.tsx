import React, { useState, useContext } from "react";
import { MdSearch } from "react-icons/md";
import { SearchOuter } from "./SearchStyles";

import { ContextState } from "../../context/ContextState";
import { getRepositoryInformation } from "../../utils/utils";

const Search = () => {
    const [repositoryInformation, setRepositoryInformation] = useContext(ContextState);
    const [searchTermFromInput, setSearchTermFromInput] = useState(17480);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        getRepositoryInformation(searchTermFromInput)
            .then((data) => {
                setRepositoryInformation(data);
            })
            .catch((err) => {
                //TODO Handle error better here with frontend feedback
                console.log(err);
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
                            placeholder="Enter Gitlab Repository"
                            onChange={(e: any) => setSearchTermFromInput(e.target.value ? e.target.value : 17480)}
                        />
                        <button type="submit">search</button>
                    </div>
                </form>
                <h3>{repositoryInformation?.other?.name}</h3>
            </SearchOuter>
        </section>
    );
};

export default Search;
