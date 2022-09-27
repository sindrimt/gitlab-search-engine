import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { SearchOuter } from "./SearchStyles";

const Search = () => {
    const [user, setUser] = React.useState("");
    /* const [commits, setCommits] = useState(); */

    const handleSubmit = (e: any) => {
        e.preventDefault();
        /*  fetch("https://gitlab.stud.idi.ntnu.no/api/v4/projects/17480/repository/commits?access_token=glpat-FF2rY-Gy-Pjzwqsh4467")
            .then((response) => response.json())
            .then((data) => console.log(data)); */
    };

    return (
        <section className="section">
            <SearchOuter className="section-center">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <MdSearch />
                        <input type="text" placeholder="Enter Gitlab Repository" value={user} onChange={(e) => setUser(e.target.value)} />
                        <button type="submit">search</button>
                    </div>
                </form>
                <h3>example blabla</h3>
            </SearchOuter>
        </section>
    );
};

export default Search;
