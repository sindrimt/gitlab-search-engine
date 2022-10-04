import React, { useContext } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ContextState } from "../../context/ContextState";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const AnotherList = (): any => {
    const [repositoryInformation, setRepositoryInformation] = useContext(ContextState);

    let dataSource: any = {};

    dataSource["chart"] = {
        caption: "Overview of branches",
        subcaption: '<a href="https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-40/prosjekt-2/">Link to repository</a>',
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

    console.log(filteredMembersWithCommits);

    filteredMembersWithCommits?.map((member: any) => {
        dataSource.data.push({
            label: member?.name,
            value: member?.commitCount,
        });
    });

    console.log("COMMIT DSTA");
    console.log(dataSource);
    //resolve(commitData);

    const chartConfigs = {
        type: "pie3d",
        width: "100%",
        height: "400",
        dataFormat: "json",

        dataSource,
    };
    return <ReactFC {...chartConfigs} />;
};

export default AnotherList;
