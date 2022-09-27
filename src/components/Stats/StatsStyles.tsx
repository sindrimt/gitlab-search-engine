import styled from "styled-components";

export const StatsOuter = styled.div`
    display: grid;
    justify-items: center;
    gap: 2rem;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 4fr 2fr;
    }

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
