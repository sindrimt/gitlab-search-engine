import React, { useState, useContext, useEffect} from "react";
import { MdSearch } from "react-icons/md";
import { SearchOuter } from "./SearchStyles";

import { ContextState } from "../../context/ContextState";
import { getRepositoryInformation } from "../../utils/utils";

const Search = () => {
    const [repositoryInformation, setRepositoryInformation] = useContext(ContextState);

    const [searchTermFromInput, setSearchTermFromInput] = useState(17480);
    const [backup, setBackup] = useState(repositoryInformation);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setRepositoryInformation({});

        getRepositoryInformation(searchTermFromInput)
            .then((data) => {
                setRepositoryInformation(data);
                localStorage.setItem("key", JSON.stringify(searchTermFromInput));
            })
            .catch((err) => {
                //TODO Handle error better here with frontend feedback
                console.log(err);
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
