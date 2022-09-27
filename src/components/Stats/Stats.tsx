import React from "react";
import styled from "styled-components";
import CommitChart from "../Charts/CommitChart";
import AnotherChart from "../Charts/AnotherChart";
import { StatsOuter } from "./StatsStyles";

const Stats = () => {
    return (
        <section className="section">
            <StatsOuter className="section-center">
                <CommitChart />
                <AnotherChart />
            </StatsOuter>
        </section>
    );
};

export default Stats;
