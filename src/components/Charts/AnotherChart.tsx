import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const dataSource = {
    chart: {
        caption: "Overview of commits",
        subcaption: '<a href="https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-40/prosjekt-2/">Link to repository</a>',
        plottooltext: "<b>$dataValue</b> of users use $label",
        showlegend: "1",
        numbersuffix: "%",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion",
        enablemultislicing: "0",
    },
    data: [
        {
            label: "Chrome",
            value: "58.90",
        },
        {
            label: "Firefox",
            value: "13.29",
        },
        {
            label: "Internet Explorer",
            value: "13",
        },
        {
            label: "Edge",
            value: "3.78",
        },
        {
            label: "Safari",
            value: "3.42",
        },
        {
            label: "Others",
            value: "5.96",
            tooltext:
                "<b>$dataValue</b> of users use below browsers:<br>• Sogou Explorer: <b>1.68%</b><br>• Opera: <b>1.57%</b><br>• QQ: <b>1.35%</b><br>• UC Browser: <b>0.73%</b><br>• Yandex: <b>0.63%</b>",
        },
    ],
};

const AnotherChart = () => {
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
