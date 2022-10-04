import React from "react";
import styled from "styled-components";
import AnotherChart from "../Charts/AnotherChart";
import { StatsOuter } from "./StatsStyles";

const Stats = () => {
    return (
        <section className="section">
            <StatsOuter className="section-center">
                <AnotherChart />
            </StatsOuter>
        </section>
    );
};

export default Stats;
