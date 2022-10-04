import React, { useContext } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ContextState } from "../../context/ContextState";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const AnotherChart = (): any => {
    const [repositoryInformation, setRepositoryInformation] = useContext(ContextState);

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
    return <ReactFC {...chartConfigs} />;
};

export default AnotherChart;
