import React, { useContext, useState } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ContextState } from "../../context/ContextState";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const AnotherChart = (): any => {
    const [filteredCommitList, setFilteredCommitList] = useState([]);
    const [
        repositoryInformation,
        setRepositoryInformation,
        globalSearchTerm,
        setGlobalSearchTerm,
        previousSearches,
        accessToken,
        setAccessToken,
        update,
        setUpdate,
    ] = useContext(ContextState);

    let dataSource: any = {};
    let link = `<a href="${repositoryInformation?.other?.http_url_to_repo}">link to repo</a>`;

    dataSource["chart"] = {
        caption: "Overview of commits",
        subcaption: link,
        numbersuffix: " commits",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion",
        enablemultislicing: "0",
    };

    dataSource["data"] = [];

    const filteredMembersWithCommits = repositoryInformation?.members?.filter((member: any) => {
        return member?.commitCount > 0;
    });

    //console.log(filteredMembersWithCommits);

    filteredMembersWithCommits?.map((member: any) => {
        dataSource.data.push({
            label: member?.name,
            value: member?.commitCount,
        });
    });

    const chartConfigs = {
        type: "pie3d",
        width: "100%",
        height: "400",
        dataFormat: "json",

        dataSource,
    };

    const MS = 604800000;

    const filterCommitData = () => {
        // Filters out commits that are only older than a week
        const filtered = repositoryInformation.commits.filter((commit: any) => {
            let date = new Date(commit.created_at);
            return Date.now() - date.getTime() > MS;
            //return commit.author_name === "Ragnar Dreier";
        });
        setFilteredCommitList(filtered);

        return <h1>hhhh</h1>;
    };

    return (
        <>
            <button onClick={() => filterCommitData()}>Commits last week</button>
            {filteredCommitList && (
                <h3>
                    There has been <span style={{ color: "blueviolet" }}>{filteredCommitList.length}</span> commits this last week
                </h3>
            )}
            <ReactFC {...chartConfigs} />
        </>
    );
};

export default AnotherChart;
