import styled from "styled-components";

export const StatsOuter = styled.div`
    display: flex;
    justify-items: center;
    gap: 2rem;

    div {
        display: flex;
        justify-content: center;
        width: 100% !important;
    }
    .fusioncharts-container {
        display: flex;
        justify-content: center;
        width: 100% !important;
    }
    svg {
        width: 100% !important;
        border-radius: var(--radius) !important;
    }
`;
